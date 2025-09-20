"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { useUser } from "@/context/UserContext"

const CTA = () => {
    const {user} = useUser()
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
        {
            user ? <Link href="/create-quiz">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Create A Quiz
                </Button>
              </Link> : (
                <>
                 <Link href="/register">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started Free
                </Button>
              </Link>
              <Link href="/login">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  Sign In
                </Button>
              </Link>
                </>
            )
        }
             
            </div>
  )
}



export default CTA