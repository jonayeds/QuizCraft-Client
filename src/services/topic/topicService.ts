"use server"

import { config } from "@/config"
import { ITopic } from "@/types/topic"

export const getAllTopics = async(): Promise<ITopic[]>   =>{     
    const res = await fetch(`${config.server_url}/topic`,{
        method:"GET",  
    })
    const result = await res.json()
    return result?.data || []
}
