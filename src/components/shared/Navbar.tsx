"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const path = usePathname().split("/")[1]
    const active = (p:string) => p === path ? "text-accent": "" 
    const activeUnderline = (p:string) => p === path ? "bg-accent h-1 rounded-full absolute bottom-1 left-0 w-full" : "hidden" 

  return (
    <div className="fixed top-0 left-0   text-white">
        <div className="flex w-screen justify-between p-4">
            <h1 className="text-2xl font-bold">QuizCraft</h1>
            <div className="flex md:gap-6 gap-4">
                <Link href="/" className="relative" >
                <p className={active("")}>Home</p>
                <div className={activeUnderline("")}></div>
                </Link>
                <Link href="/" className="relative" >
                <p className={active("about")}>About</p>
                <div className={activeUnderline("about")}></div>
                </Link>
                <Link href="/" className="relative" >
                <p className={active("topics")}>Topics</p>
                <div className={activeUnderline("topics")}></div>
                </Link>
            </div>
            <div className="flex gap-2">
                <Link href="/login"><Button>Login</Button></Link>
                <Link href="/register"><Button variant="outline">Register</Button></Link>
            </div>

        </div>
    </div>
  )
}

export default Navbar