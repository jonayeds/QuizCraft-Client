"use server"

import { config } from "@/config"
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"

export const createQuiz = async(data:FieldValues) =>{
    const token = (await cookies()).get("quizcraft_access")?.value      
    const res = await fetch(`${config.server_url}/quiz/create-quiz`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${token}`
        }
    })
    const result = await res.json()
    return result
}