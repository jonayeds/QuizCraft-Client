"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";


const AuthNav = () => {
    const path = usePathname(); 
    const active = (p:string)=> path === p ? "bg-white/20 backdrop-blur-md border border-white/30" : "hover:bg-white/10"
  return (
    <div className=" pt-12  w-full flex md:flex-row flex-col gap-4 justify-between items-center px-4 md:px-8">
        {/* Home Navigation */}
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <span className="text-lg">🎯</span>
            </div>
            <span className="font-bold text-xl">QuizCraft</span>
        </Link>

        {/* Auth Toggle */}
        <div className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20">
            <Link href="/login" className={`px-6 py-2 rounded-xl text-white font-medium transition-all duration-200 ${active("/login")}`}>
                Login
            </Link>
            <Link href="/register" className={`px-6 py-2 rounded-xl text-white font-medium transition-all duration-200 ${active("/register")}`}>
                Register
            </Link>
        </div>
    </div>
  )
}

export default AuthNav