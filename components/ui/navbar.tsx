"use client";

import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { 
  Home, 
  ClipboardCheck, 
  LogOut, 
  Users 
} from "lucide-react";


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
          
          <Link href="/teacher" className="flex items-center gap-3 group">
            
<div className="rounded-full overflow-hidden shadow-md border border-slate-200 bg-white">
  <Image 
    src="/chronos-logo.jpg" 
    alt="Chronos Logo"
    width={48}  // Direct width in pixels
    height={48} // Direct height in pixels
    className="object-cover" 
    priority 
  />
</div>
            <span className="text-xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-pink-300 tracking-tight">
              Chronos CS Portal
            </span>
          </Link>

          
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