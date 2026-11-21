// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { motion } from "motion/react"
// import { BsRobot, BsCoin } from "react-icons/bs";
// import { HiOutlineLogout } from "react-icons/hi";
// import { FaUserAstronaut } from "react-icons/fa";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ServerUrl } from '../App';
// import { setUserData } from '../redux/userSlice';
// import AuthModel from './AuthModel';
// function Navbar() {
//     const {userData} = useSelector((state)=>state.user)
//     const [showCreditPopup,setShowCreditPopup] = useState(false)
//     const [showUserPopup,setShowUserPopup] = useState(false)
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const [showAuth, setShowAuth] = useState(false);

//     const handleLogout = async () => {
//         try {
//             await axios.get(ServerUrl + "/api/auth/logout" , {withCredentials:true})
//             dispatch(setUserData(null))
//             setShowCreditPopup(false)
//             setShowUserPopup(false)
//             navigate("/")

//         } catch (error) {
//             console.log(error)
//         }
//     }
//   return (
//     <div className='bg-[#f3f3f3] flex justify-center px-4 pt-6'>
//         <motion.div 
//         initial={{opacity:0 , y:-40}}
//         animate={{opacity:1 , y:0}}
//         transition={{duration: 0.3}}
//         className='w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex justify-between items-center relative'>
//             <div className='flex items-center gap-3 cursor-pointer'>
//                 <div className='bg-black text-white p-2 rounded-lg'>
//                     <BsRobot size={18}/>

//                 </div>
//                 <h1 className='font-semibold hidden md:block text-lg'>InterviewIQ.AI</h1>
//             </div>

//             <div className='flex items-center gap-6  relative'>
//                 <div className='relative'>
//                     <button onClick={()=>{
//                         if(!userData){
//                             setShowAuth(true)
//                             return;
//                         }
//                         setShowCreditPopup(!showCreditPopup);
//                         setShowUserPopup(false)
//                     }} className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-md hover:bg-gray-200 transition'>
//                         <BsCoin size={20}/>
//                         {userData?.credits || 0}
//                     </button>

//                     {showCreditPopup && (
//                         <div className='absolute right-[-50px] mt-3 w-64 bg-white shadow-xl border border-gray-200 rounded-xl p-5 z-50'>
//                             <p className='text-sm text-gray-600 mb-4'>Need more credits to continue interviews?</p>
//                             <button onClick={()=>navigate("/pricing")} className='w-full bg-black text-white py-2 rounded-lg text-sm'>Buy more credits</button>

//                         </div>
//                     )}
//                 </div>

//                 <div className='relative'>
//                     <button
//                     onClick={()=>{
//                          if(!userData){
//                             setShowAuth(true)
//                             return;
//                         }
//                         setShowUserPopup(!showUserPopup);
//                         setShowCreditPopup(false)
//                     }} className='w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-semibold'>
//                         {userData ? userData?.name.slice(0,1).toUpperCase() : <FaUserAstronaut size={16}/>}
                        
//                     </button>

//                     {showUserPopup && (
//                         <div className='absolute right-0 mt-3 w-48 bg-white shadow-xl border border-gray-200 rounded-xl p-4 z-50'>
//                             <p className='text-md text-blue-500 font-medium mb-1'>{userData?.name}</p>

//                             <button onClick={()=>navigate("/history")} className='w-full text-left text-sm py-2 hover:text-black text-gray-600'>InterView History</button>
//                             <button onClick={handleLogout} 
//                             className='w-full text-left text-sm py-2 flex items-center gap-2 text-red-500'>
//                                 <HiOutlineLogout size={16}/>
//                                 Logout</button>
//                         </div>
//                     )}
//                 </div>

//             </div>



//         </motion.div>

//         {showAuth && <AuthModel onClose={()=>setShowAuth(false)}/>}
      
//     </div>
//   )
// }

// export default Navbar




import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"; // Note: Updated to standard framer-motion import
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ServerUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import AuthModel from "./AuthModel";

function Navbar() {
  const { userData } = useSelector((state) => state.user);
  const [showCreditPopup, setShowCreditPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.get(ServerUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      dispatch(setUserData(null));
      setShowCreditPopup(false);
      setShowUserPopup(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-transparent flex justify-center px-4 pt-6 sticky top-0 z-[100]">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-6xl bg-slate-900/40 backdrop-blur-xl rounded-[24px] shadow-2xl border border-slate-800/50 px-6 md:px-8 py-4 flex justify-between items-center relative"
      >
        {/* Logo Section */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="bg-emerald-500 text-slate-950 p-2 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform">
            <BsRobot size={20} />
          </div>
          <h1 className="font-bold hidden md:block text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            InterviewIQ<span className="text-emerald-500">.AI</span>
          </h1>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 md:gap-6 relative">
          {/* Credits Button */}
          <div className="relative">
            <button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true);
                  return;
                }
                setShowCreditPopup(!showCreditPopup);
                setShowUserPopup(false);
              }}
              className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 px-4 py-2 rounded-full text-sm font-medium text-emerald-400 hover:bg-slate-700/50 hover:border-emerald-500/30 transition-all active:scale-95"
            >
              <BsCoin size={18} className="animate-pulse" />
              <span>{userData?.credits || 0}</span>
            </button>

            {showCreditPopup && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 md:right-[-20px] mt-4 w-64 bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-5 z-50 backdrop-blur-2xl"
              >
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">
                  Fuel your prep
                </p>
                <p className="text-sm text-slate-300 mb-4">
                  Need more credits to unlock advanced AI modules?
                </p>
                <button
                  onClick={() => {
                    navigate("/pricing");
                    setShowCreditPopup(false);
                  }}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20"
                >
                  Get More Credits
                </button>
              </motion.div>
            )}
          </div>

          {/* User Profile Button */}
          <div className="relative">
            <button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true);
                  return;
                }
                setShowUserPopup(!showUserPopup);
                setShowCreditPopup(false);
              }}
              className="w-10 h-10 bg-gradient-to-tr from-slate-800 to-slate-700 border border-slate-600 rounded-full flex items-center justify-center font-bold text-white hover:border-emerald-500/50 transition-all overflow-hidden shadow-inner"
            >
              {userData ? (
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                  {userData?.name.slice(0, 1).toUpperCase()}
                </span>
              ) : (
                <FaUserAstronaut size={18} className="text-slate-400" />
              )}
            </button>

            {showUserPopup && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-4 w-56 bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-2 z-50 backdrop-blur-2xl"
              >
                <div className="px-4 py-3 border-b border-slate-800/50">
                  <p className="text-xs text-slate-500 font-medium">
                    Logged in as
                  </p>
                  <p className="text-sm text-white font-bold truncate">
                    {userData?.name}
                  </p>
                </div>

                <div className="p-1">
                  <button
                    onClick={() => {
                      navigate("/history");
                      setShowUserPopup(false);
                    }}
                    className="w-full text-left text-sm py-2.5 px-3 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-emerald-400 transition-all"
                  >
                    Interview History
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-sm py-2.5 px-3 rounded-lg flex items-center gap-2 text-rose-400 hover:bg-rose-500/10 transition-all"
                  >
                    <HiOutlineLogout size={16} />
                    Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
    </div>
  );
}

export default Navbar;






