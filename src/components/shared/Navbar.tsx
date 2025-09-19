"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import { useUser } from "@/context/UserContext"
import { Avatar, AvatarImage } from "../ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { logout } from "@/services/auth/authService"

const Navbar = () => {
    const path = usePathname().split("/")[1]
    const active = (p:string) => p === path ? "text-accent": "" 
    const activeUnderline = (p:string) => p === path ? "bg-accent h-1 rounded-full absolute bottom-1 left-0 w-full" : "hidden" 
    const {user, setUser} = useUser()
    const handleLogout = async()=>{
        await logout()
        setUser(null)   
    }

  return (
    <div className="fixed top-0 left-0   text-white">
        <div className="flex w-screen justify-between p-4">
            <h1 className="text-2xl font-bold">QuizCraft</h1>
            <div className="flex md:gap-6 gap-4">
                <Link href="/" className="relative" >
                <p className={active("")}>Home</p>
                <div className={activeUnderline("")}></div>
                </Link>
                {
                    user ? (<>
                    <Link href="/my-quizzes" className="relative" >
                <p className={active("my-quizzes")}>My Quizzes</p>
                <div className={activeUnderline("my-quizzes")}></div>
                </Link>
                    <Link href="/join-quiz" className="relative" >
                <p className={active("join-quiz")}>Join Quiz</p>
                <div className={activeUnderline("join-quiz")}></div>
                </Link>
                    <Link href="/create-quiz" className="relative" >
                <p className={active("create-quiz")}>Create Quiz</p>
                <div className={activeUnderline("create-quiz")}></div>
                </Link>
                    </>): <Link href="/" className="relative" >
                <p className={active("about")}>About</p>
                <div className={activeUnderline("about")}></div>
                </Link>
                }
                
                <Link href="/" className="relative" >
                <p className={active("topics")}>Topics</p>
                <div className={activeUnderline("topics")}></div>
                </Link>
            </div>
            <div className="flex gap-2">
                {
                    user ? (
                        <>
                        <Avatar className="size-10 bg-accent border-2 border-primary  flex items-center justify-center">
                            <AvatarImage src={user?.profileIamge || ""}/>
                            <AvatarFallback className="text-xl">{user?.username?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <Button onClick={handleLogout}>Logout</Button>
                        
                        </>
                    ): (<><Link href="/login"><Button>Login</Button></Link>
                <Link href="/register"><Button variant="outline">Register</Button></Link></>)
                }
                
            </div>

        </div>
    </div>
  )
}

export default Navbar