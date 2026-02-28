import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-indigo-950/40 backdrop-blur-md">
      {/* Outer rotating gradient ring */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-32 h-32 rounded-full border-[6px] border-t-indigo-400 border-r-pink-400 border-b-cyan-400 border-l-transparent animate-spin"></div>

        {/* Inner static logo */}
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/50 bg-white p-2 animate-pulse">
          <Image
            src="/logo.png"
            alt="AttendX Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-pink-300 tracking-wider animate-pulse">
          AttendX
        </h2>
        <p className="mt-3 text-indigo-200/80 text-sm font-semibold tracking-[0.2em] uppercase animate-bounce">
          Loading Data...
        </p>
      </div>
    </div>
  );
}
