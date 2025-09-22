"use server"

import { config } from "@/config"
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"
import { jwtDecode } from "jwt-decode";
import { auth, signIn } from "@/auth";

export const register = async(data:FieldValues)=>{
    const res = await fetch(`${config.server_url}/user/register`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include"
    })
    const result = await res.json()
    if(result?.success){
        (await cookies()).set("quizcraft_access", result.data.accessToken, { httpOnly: true, secure:true })
        delete result.data.accessToken
        return result
    }else{
        return result
    }
}

export const login = async(data:FieldValues)=>{
    const res = await fetch(`${config.server_url}/auth/login`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include"
    })
    const result = await res.json()
    if(result?.success){
        (await cookies()).set("quizcraft_access", result.data.accessToken, { httpOnly: true, secure:true })
        delete result.data.accessToken
        return result
    }else{
        return result
    }
}

export const logout = async ()=>{
    const cookieStore = await cookies();
    cookieStore.delete("quizcraft_access");  
    cookieStore.delete("authjs.session-token");  
    cookieStore.delete("authjs.csrf-token");  
    cookieStore.delete("authjs.callback-url");  

}

export const getUserFromToken = async():Promise<{email:string, role:string} | null>=>{
    const token = (await cookies()).get("quizcraft_access")?.value; 
    if(!token) return null;
    const user = jwtDecode(token) as {email:string, role:string};
    if(!user) return null;
    return user;
}

export const getAuthJsSession = async () => {
  const session = await auth();
  return session;
  
};

export const googleLogin = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const socialLogin = async()=>{
    const session = await auth()
    if(!session?.user?.email) return null
    const res = await fetch(`${config.server_url}/auth/social-login`,{
        method:"POST",
        body:JSON.stringify({
            email:session.user.email,
            name:session.user.name,
            image:session.user.image
        }),
        headers:{
            "Content-Type":"application/json",
        },
        credentials:"include"
    })
    const result = await res.json() 
    if(result?.success){
        (await cookies()).set("quizcraft_access", result.data.accessToken, { httpOnly: true, secure:true })
        delete result.data.accessToken
        return result
    }else{
        return null
    }
}
