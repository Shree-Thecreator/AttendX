"use client";

import { useState } from "react";
import Link from "next/link";
import { Features } from "@/components/ui/features-2";
import { GraduationCap, ShieldCheck } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { motion, AnimatePresence } from "motion/react";

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          /* --- SCREEN 1: ANIMATED SPLASH SCREEN --- */
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] cursor-pointer"
            onClick={() => setShowIntro(false)}
          >
            <BeamsBackground intensity="strong" className="flex items-center justify-center">
              <div className="text-center space-y-6 relative z-10 px-4">
                <motion.h1
                  initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                  className="text-7xl md:text-9xl font-black italic tracking-tighter bg-gradient-to-r from-sky-400 via-rose-500 to-violet-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-gradient-x"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  AttendX
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-lg md:text-2xl font-light uppercase tracking-[0.3em] text-yellow-400/80"
                >
                  Departmental <span className="font-bold text-sky-400">Attendance</span> System
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-white/40 font-mono tracking-[0.3em] uppercase text-sm"
                >
                  Click anywhere to enter
                </motion.p>
              </div>
            </BeamsBackground>
          </motion.div>
        ) : (
          /* --- SCREEN 2: CLEAN STATIC LANDING PAGE --- */
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col bg-slate-50 min-h-screen"
          >
            {/* Hero Section */}
            <main className="grow flex flex-col items-center justify-center px-6 py-20">
              <div className="max-w-3xl w-full text-center space-y-8">
                {/* Logo & Branding */}
                <div className="space-y-4">
                  <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-indigo-200">
                    <GraduationCap className="text-white size-10" />
                  </div>
                  <h1 className="text-5xl font-black text-slate-900 tracking-tight sm:text-6xl">
                    Chronos CS <span className="text-indigo-600">Portal</span>
                  </h1>
                  <p className="text-slate-500 text-lg font-medium max-w-lg mx-auto">
                    The official Digital Register & Attendance System for our College CS Department.
                  </p>
                </div>

                {/* Entrance Card */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 max-w-sm mx-auto transition-transform hover:scale-[1.02]">
                  <div className="space-y-6">
                    <div className="text-left">
                      <h2 className="text-sm font-black text-indigo-500 uppercase tracking-[0.2em]">Authorized Access</h2>
                      <p className="text-slate-400 text-xs">Faculty login required for management</p>
                    </div>

                    <Link
                      href="/teacher"
                      className="group flex items-center justify-between w-full bg-slate-900 hover:bg-indigo-600 text-white p-5 rounded-2xl font-bold transition-all duration-300 shadow-lg"
                    >
                      <span className="text-lg">Enter as Teacher</span>
                      <div className="bg-white/10 p-2 rounded-lg group-hover:translate-x-1 transition-transform">
                        <ShieldCheck size={20} />
                      </div>
                    </Link>

                    <div className="pt-2 text-center">
                      <p className="text-[10px] text-slate-400 leading-relaxed italic">
                        *Unauthorized access is strictly prohibited.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Features Section */}
            <div className="w-full bg-white border-t border-slate-100">
              <div className="max-w-6xl mx-auto py-12">
                <Features />
              </div>
            </div>

            {/* --- REPLACED FOOTER SECTION --- */}
            <footer className="w-full bg-gradient-to-b from-indigo-950 to-slate-900 text-white border-t border-indigo-500/20">
              <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
                  {/* Using your project logo path */}
                  <div className="size-11 rounded-full overflow-hidden border-2 border-indigo-400 shadow-lg shadow-indigo-500/20">
                    <img 
                      alt="Chronos Logo" 
                      className="object-cover h-full w-full"
                      src="/chronos-logo.jpg" 
                    />
                  </div>
                  <span className="text-xl font-black tracking-tighter">
                    Chronos <span className="text-indigo-400">CS</span>
                  </span>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed text-slate-400 px-4">
                  Empowering the Computer Science Department at Chronos Cs with 
                  advanced digital management tools. Streamlining academic administration 
                  through innovative software solutions.
                </p>
              </div>
              <div className="border-t border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-[10px] sm:text-xs font-medium tracking-widest text-slate-500 uppercase">
                  © 2026 Chronos Computer Science Department. All rights reserved.
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}