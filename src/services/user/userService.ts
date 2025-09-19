"use server"
import { IUser } from "@/types/user"
import { cookies } from "next/headers"


export const getUser = async():Promise<IUser | null>=>{
    const token = (await cookies()).get("quizcraft_access")?.value
    if(!token) return null
    const res = await fetch(`${process.env.SERVER_URL}/user/get-me`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization": token  
        }
    })
    if(!res.ok) return null
    const result = await res.json()   
    return result?.data || null 
}