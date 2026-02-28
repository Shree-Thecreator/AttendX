"use client";

import {
  ClipboardCheck,
  Home,
  LogOut,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navLinks = [
  { name: "Dashboard", href: "/Dashboard", icon: <Home size={18} /> },
  { name: "Attendance", href: "/attendance", icon: <ClipboardCheck size={18} /> },
  { name: "Students", href: "/students", icon: <Users size={18} /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-cyan-500 bg-indigo-950  backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link href="/teacher" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="relative w-11 h-11 overflow-hidden">
              <Image
                src="/icon.png"
                alt="AttendX Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-pink-300 tracking-tight">
              AttendX
            </span>
          </Link>


          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-bold transition-all rounded-lg ${isActive
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-white hover:text-slate-900 hover:bg-slate-50"
                    }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>


          <div className="flex items-center gap-4 border-l pl-4 border-slate-200">
            <div className="flex-col items-end hidden sm:flex text-right">
              <span className="text-xs font-bold text-white leading-none">Admin Teacher</span>
              <span className="text-[10px] text-white font-medium leading-none mt-1">CS Department</span>
            </div>

            <button
              title="Logout"
              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
            >
              <LogOut size={20} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}