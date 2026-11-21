// import React from 'react'
// import Navbar from '../components/Navbar'
// import { useSelector } from 'react-redux'
// import { motion } from "motion/react";
// import {
//   BsRobot,
//   BsMic,
//   BsClock,
//   BsBarChart,
//   BsFileEarmarkText
// } from "react-icons/bs";
// import { HiSparkles } from "react-icons/hi";
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import AuthModel from '../components/AuthModel';
// import hrImg from "../assets/HR.png";
// import techImg from "../assets/tech.png";
// import confidenceImg from "../assets/confi.png";
// import creditImg from "../assets/credit.png";
// import evalImg from "../assets/ai-ans.png";
// import resumeImg from "../assets/resume.png";
// import pdfImg from "../assets/pdf.png";
// import analyticsImg from "../assets/history.png";
// import Footer from '../components/Footer';

// function Home() {
//   const { userData } = useSelector((state) => state.user)
//   const [showAuth, setShowAuth] = useState(false);
//   const navigate = useNavigate()
//   return (
//     <div className='min-h-screen bg-[#f3f3f3] flex flex-col'>
//       <Navbar />

//       <div className='flex-1 px-6 py-20'>
//         <div className='max-w-6xl mx-auto'>

//           <div className='flex justify-center mb-6'>
//             <div className='bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2'>
//               <HiSparkles size={16} className="bg-green-50 text-green-600" />
//               AI Powered Smart Interview Platform
//             </div>

//           </div>
//           <div className='text-center mb-28'>
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className='text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto'>
//               Practice Interviews with
//               <span className='relative inline-block'>
//                 <span className='bg-green-100 text-green-600 px-5 py-1 rounded-full'>
//                   AI Intelligence

//                 </span>
//               </span>

//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className='text-gray-500 mt-6 max-w-2xl mx-auto text-lg'>
//               Role-based mock interviews with smart follow-ups,
//               adaptive difficulty and real-time performance evaluation.

//             </motion.p>

//             <div className='flex flex-wrap justify-center gap-4 mt-10'>
//               <motion.button
//                 onClick={() => {
//                   if (!userData) {
//                     setShowAuth(true)
//                     return;
//                   }
//                   navigate("/interview")
//                 }}
//                 whileHover={{ opacity: 0.9, scale: 1.03 }}
//                 whileTap={{ opacity: 1, scale: 0.98 }}
//                 className='bg-black text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md'>
//                 Start Interview

//               </motion.button>

//               <motion.button
//                 onClick={() => {
//                   if (!userData) {
//                     setShowAuth(true)
//                     return;
//                   }
//                   navigate("/history")
//                 }}
//                 whileHover={{ opacity: 0.9, scale: 1.03 }}
//                 whileTap={{ opacity: 1, scale: 0.98 }}
//                 className='border border-gray-300 px-10 py-3 rounded-full hover:bg-gray-100 transition'>
//                 View History

//               </motion.button>
//             </div>
//           </div>

//           <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-28'>
//             {
//               [
//                 {
//                   icon: <BsRobot size={24} />,
//                   step: "STEP 1",
//                   title: "Role & Experience Selection",
//                   desc: "AI adjusts difficulty based on selected job role."
//                 },
//                 {
//                   icon: <BsMic size={24} />,
//                   step: "STEP 2",
//                   title: "Smart Voice Interview",
//                   desc: "Dynamic follow-up questions based on your answers."
//                 },
//                 {
//                   icon: <BsClock size={24} />,
//                   step: "STEP 3",
//                   title: "Timer Based Simulation",
//                   desc: "Real interview pressure with time tracking."
//                 }
//               ].map((item, index) => (
//                 <motion.div key={index}
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 + index * 0.2 }}
//                   whileHover={{ rotate: 0, scale: 1.06 }}

//                   className={`
//         relative bg-white rounded-3xl border-2 border-green-100
//         hover:border-green-500 p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl
//         transition-all duration-300
//         ${index === 0 ? "rotate-[-4deg]" : ""}
//         ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
//         ${index === 2 ? "rotate-[-3deg]" : ""}
//       `}>

//                   <div className='absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-green-500 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg'>
//                     {item.icon}</div>
//                   <div className='pt-10 text-center'>
//                     <div className='text-xs text-green-600 font-semibold mb-2 tracking-wider'>{item.step}</div>
//                     <h3 className='font-semibold mb-3 text-lg'>{item.title}</h3>
//                     <p className='text-sm text-gray-500 leading-relaxed'>{item.desc}</p>
//                   </div>

//                 </motion.div>
//               ))
//             }
//           </div>

//           <div className='mb-32'>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className='text-4xl font-semibold text-center mb-16'>
//               Advanced AI{" "}
//               <span className="text-green-600">Capabilities</span>

//             </motion.h2>

//             <div className='grid md:grid-cols-2 gap-10'>
//               {
//                 [
//                   {
//                     image: evalImg,
//                     icon: <BsBarChart size={20} />,
//                     title: "AI Answer Evaluation",
//                     desc: "Scores communication, technical accuracy and confidence."
//                   },
//                   {
//                     image: resumeImg,
//                     icon: <BsFileEarmarkText size={20} />,
//                     title: "Resume Based Interview",
//                     desc: "Project-specific questions based on uploaded resume."
//                   },
//                   {
//                     image: pdfImg,
//                     icon: <BsFileEarmarkText size={20} />,
//                     title: "Downloadable PDF Report",
//                     desc: "Detailed strengths, weaknesses and improvement insights."
//                   },
//                   {
//                     image: analyticsImg,
//                     icon: <BsBarChart size={20} />,
//                     title: "History & Analytics",
//                     desc: "Track progress with performance graphs and topic analysis."
//                   }
//                 ].map((item, index) => (
//                   <motion.div key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ scale: 1.02 }}
//                     className='bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all'>
//                     <div className='flex flex-col md:flex-row items-center gap-8'>
//                       <div className='w-full md:w-1/2 flex justify-center'>
//                         <img src={item.image} alt={item.title} className='w-full h-auto object-contain max-h-64' />
//                       </div>

//                       <div className='w-full md:w-1/2'>
//                         <div className='bg-green-50 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
//                           {item.icon}
//                         </div>
//                         <h3 className='font-semibold mb-3 text-xl'>{item.title}</h3>
//                         <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
//                       </div>

//                     </div>

//                   </motion.div>
//                 ))
//               }
//             </div>

//           </div>

//           <div className='mb-32'>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className='text-4xl font-semibold text-center mb-16'>
//               Multiple Interview{" "}
//               <span className="text-green-600">Modes</span>

//             </motion.h2>

//             <div className='grid md:grid-cols-2 gap-10'>
//               {
//                 [
//                   {
//                     img: hrImg,
//                     title: "HR Interview Mode",
//                     desc: "Behavioral and communication based evaluation."
//                   },
//                   {
//                     img: techImg,
//                     title: "Technical Mode",
//                     desc: "Deep technical questioning based on selected role."
//                   },

//                   {
//                     img: confidenceImg,
//                     title: "Confidence Detection",
//                     desc: "Basic tone and voice analysis insights."
//                   },
//                   {
//                     img: creditImg,
//                     title: "Credits System",
//                     desc: "Unlock premium interview sessions easily."
//                   }
//                 ].map((mode, index) => (
//                   <motion.div key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ y: -6 }}
//                     className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">

//                     <div className='flex items-center justify-between gap-6'>
//                       <div className="w-1/2">
//                         <h3 className="font-semibold text-xl mb-3">
//                           {mode.title}
//                         </h3>

//                         <p className="text-gray-500 text-sm leading-relaxed">
//                           {mode.desc}
//                         </p>
//                       </div>

//                       {/* RIGHT IMAGE */}
//                       <div className="w-1/2 flex justify-end">
//                         <img
//                           src={mode.img}
//                           alt={mode.title}
//                           className="w-28 h-28 object-contain"
//                         />
//                       </div>

//                     </div>

//                   </motion.div>
//                 ))
//               }
//             </div>

//           </div>

//         </div>
//       </div>

//       {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

//         <Footer/>

//     </div>
//   )
// }

// export default Home

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText,
  BsArrowRight,
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";

// Components & Assets
import Navbar from "../components/Navbar";
import AuthModel from "../components/AuthModel";
import Footer from "../components/Footer";
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";

function Home() {
  const { userData } = useSelector((state) => state.user);
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();

  const handleProtectedRoute = (path) => {
    if (!userData) {
      setShowAuth(true);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <Navbar />

      <main className="flex-1 relative overflow-hidden">
        {/* Dark Mode Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-900/20 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 shadow-sm text-sm font-medium text-emerald-400"
            >
              <HiSparkles className="text-emerald-400 animate-pulse" />
              <span>The Future of Interview Prep</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white"
            >
              Master Your Next Interview <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                Powered by AI
              </span>
            </motion.h1>

            <motion.p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Experience high-fidelity mock interviews with real-time feedback,
              adaptive questioning, and comprehensive performance analytics.
            </motion.p>

            <motion.div className="flex flex-wrap justify-center gap-5 pt-4">
              <button
                onClick={() => handleProtectedRoute("/interview")}
                className="group relative px-8 py-4 bg-emerald-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-emerald-500 transition-all"
              >
                <span className="flex items-center gap-2">
                  Start Free Interview <BsArrowRight />
                </span>
              </button>

              <button
                onClick={() => handleProtectedRoute("/history")}
                className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-2xl font-semibold hover:bg-slate-700 transition-all"
              >
                View Progress
              </button>
            </motion.div>
          </div>

          {/* --- STEPS SECTION --- */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BsRobot />,
                step: "01",
                title: "Smart Selection",
                desc: "Choose your role and experience. AI tailors the difficulty instantly.",
              },
              {
                icon: <BsMic />,
                step: "02",
                title: "Voice Interaction",
                desc: "Speak naturally. Our AI listens and asks intelligent follow-up questions.",
              },
              {
                icon: <BsClock />,
                step: "03",
                title: "Instant Analysis",
                desc: "Receive a comprehensive score on technical and soft skills immediately.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-emerald-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-xl flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>
                <span className="text-emerald-500 font-bold text-xs tracking-widest uppercase">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* --- CAPABILITIES SECTION --- */}
          <section className="py-32">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced AI Capabilities
              </h2>
              <div className="h-1.5 w-20 bg-emerald-500 rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  img: evalImg,
                  title: "Precision Evaluation",
                  desc: "Get graded on communication, technical accuracy, and sentiment.",
                  icon: <BsBarChart />,
                },
                {
                  img: resumeImg,
                  title: "Resume-Ready",
                  desc: "Upload your CV and get grilled on your actual project experience.",
                  icon: <BsFileEarmarkText />,
                },
                {
                  img: pdfImg,
                  title: "Insight Reports",
                  desc: "Detailed PDF breakdown of your strengths and growth areas.",
                  icon: <BsFileEarmarkText />,
                },
                {
                  img: analyticsImg,
                  title: "Growth Tracking",
                  desc: "Visual charts to see your improvement over multiple sessions.",
                  icon: <BsBarChart />,
                },
              ].map((cap, i) => (
                <div
                  key={i}
                  className="group flex flex-col md:flex-row bg-slate-900/40 border border-slate-800 rounded-[2rem] p-6 gap-8"
                >
                  <div className="md:w-1/2 rounded-2xl bg-slate-950 flex items-center justify-center p-4">
                    <img src={cap.img} alt={cap.title} className="max-h-48" />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="text-emerald-400 mb-4 text-xl">
                      {cap.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {cap.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
      <Footer />
    </div>
  );
}

export default Home;