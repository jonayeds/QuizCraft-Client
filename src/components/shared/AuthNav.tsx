"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";


const AuthNav = () => {
    const path = usePathname(); 
    const active = (p:string)=> path === p ? "bg-black rounded-3xl p-1" : " rounded p-1 roounded-3xl "
  return (
    <div className="absolute md:top-[10vh] top-[5vh] w-full justify-center flex items-center gap-4">
        <div  className={active("/login")}><Link href="/login" className="p-4 ">Login</Link></div>
        <div className={active("/register")}><Link href="/register" className="p-4">Register</Link></div>
    </div>
  )
}

export default AuthNav