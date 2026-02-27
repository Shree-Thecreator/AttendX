"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, BookOpen, LogOut } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Teacher Portal", href: "/teacher", icon: <BookOpen size={18} /> },
    { name: "Dashboard", href: "/Dashboard/1", icon: <LayoutDashboard size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-cyan-500 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-indigo-200 shadow-lg">
              <Users className="text-white" size={20} />
            </div>
            <span className="text-xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-600 tracking-tight">
              MCCS Portal
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-bold transition-all rounded-lg ${
                    isActive 
                      ? "text-indigo-600 bg-indigo-50" 
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* User Profile / Logout */}
          <div className="flex items-center gap-4 border-l pl-4 border-cyan-500">
            <div className="flex-col items-end hidden sm:flex">
              <span className="text-xs font-bold text-slate-900 leading-none">Admin Teacher</span>
              <span className="text-[10px] text-slate-400 font-medium leading-none mt-1">CS Department</span>
            </div>
            <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}