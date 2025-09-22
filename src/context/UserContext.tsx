"use client"


import { getAuthJsSession, socialLogin } from "@/services/auth/authService";
import { getUser } from "@/services/user/userService";
import { IUser } from "@/types/user"
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"



interface IUserContext{
    user:IUser | null;
    isLoading:boolean;
    setIsLoading:Dispatch<SetStateAction<boolean>>;
    setUser:Dispatch<SetStateAction<IUser | null>>
}

const UserContext = createContext<IUserContext | undefined>(undefined)

const UserProvider = ({children}:{children:React.ReactNode}) => {
    const [user, setUser] = useState<IUser | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const handleUser = async()=>{
            let user = await getUser()
            const session = await getAuthJsSession()
            if(session){
                if(!user){
                    const socialUser = await socialLogin()
                    user = socialUser?.data || null
                }
            }
            setUser(user)
            setIsLoading(false)
        }
        handleUser()
    },[])
  return (
    <UserContext.Provider value={{user, isLoading, setIsLoading, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export const useUser = ()=>{
    const context = useContext(UserContext)
    if(!context){
        throw new Error("useUser must be used within a UserProvider")
    }
    return context
}


export default UserProvider