"use client";

import { useState, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QRCode from "react-qr-code";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import { Features } from "@/components/ui/features-2";

export default function TeacherPage() {
  
  const [semester, setSemester] = useState(1);
  const [section, setSection] = useState("Sec 1");
  const [showQR, setShowQR] = useState(false);
  const router = useRouter();

  // Initialize Supabase client using environment variables
const supabase = useMemo(() => {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder"
    );
    }, []);

  // 1. DIRECT BUTTON: Takes teacher to the digital attendance list
const handleTakeAttendance = () => {
  // It MUST end with /attendance to go to the register, not the add-student page
  router.push(`/Dashboard/${semester}/attendance`); 
};
// Navigates directly to the registration form
const handleAddStudent = () => {
  router.push(`/Dashboard/${semester}/add-student`);
};
  // 2. MANAGEMENT BUTTON: Takes teacher to view/add/delete students
  const handleGoToStudentList = () => {
    router.push(`/Dashboard/${semester}`);
  };

  // 3. BULK ACTION: Marks everyone in the current view as present
  const handleBulkYes = async () => {
    // This triggers the confetti animation
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
    alert(`Success! Opening attendance sheet for Semester ${semester}...`);
    handleTakeAttendance();
  };

  return (
    
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Class Management
          </h1>
          <p className="text-slate-500 font-medium">Chronos CS Dept</p>
        </div>
        
        <Card className="p-6 space-y-6 shadow-xl bg-white rounded-2xl border-none">
          <div className="space-y-4">
            {/* Semester Selection */}
            <div>
              <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">
                Select Semester
              </label>
              <select 
                className="w-full p-3 border-2 border-slate-100 rounded-xl mt-1 font-semibold focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                value={semester}
                onChange={(e) => setSemester(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6].map((s) => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
            </div>

            {/* Section Selection */}
            <div>
              <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">
                Select Section
              </label>
              <select 
                className="w-full p-3 border-2 border-slate-100 rounded-xl mt-1 font-semibold focus:border-indigo-500 outline-none transition-all"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="Sec 1">Section 1</option>
                <option value="Sec 2">Section 2</option>
              </select>
            </div>
          </div>

          <div className="grid gap-3 pt-4">
            {/* PRIMARY ACTION: Take Attendance */}
            <Button 
              onClick={handleTakeAttendance} 
              className="bg-emerald-600 hover:bg-emerald-700 h-14 text-lg font-bold rounded-xl shadow-lg shadow-emerald-100 transition-transform active:scale-95"
            >
              ✅ Take attendance
            </Button>
            
            {/* SECONDARY ACTION: Manage Students */}
           {/* REGISTRATION ACTION: Add New Student */}
      <Button 
         onClick={handleAddStudent} 
        className="bg-blue-600 hover:bg-blue-700 h-14 text-lg font-bold rounded-xl shadow-lg shadow-blue-100 transition-transform active:scale-95 flex gap-2"
>
      👤 Add New Student
        </Button>

            {/* QR TOGGLE */}
            <Button 
              variant="ghost" 
              onClick={() => setShowQR(!showQR)}
              className="text-slate-400 font-medium hover:text-slate-600"
            >
              {showQR ? "Close QR Scanner" : "Display Class QR Code"}
            </Button>
          </div>
        </Card>

        {/* QR CODE DISPLAY */}
        {showQR && (
          <Card className="p-8 flex flex-col items-center animate-in fade-in zoom-in duration-300 bg-white shadow-2xl rounded-3xl border-none">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <QRCode 
                value={`mccs-auth-sem${semester}-${section}`} 
                size={200}
                level="H"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-bold text-slate-800 uppercase">
                Semester {semester} • {section}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                STUDENT SCAN PORTAL ACTIVE
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}