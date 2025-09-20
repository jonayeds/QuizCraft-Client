"use server"

import { config } from "@/config"
import { ITopic } from "@/types/topic"
import { cookies } from "next/headers"

export const getAllTopics = async(): Promise<ITopic[]>   =>{     
    const res = await fetch(`${config.server_url}/topic`,{
        method:"GET",  
    })
    const result = await res.json()
    return result?.data || []
}

export const addNewTopic = async(topicName: string) =>{
    const token = (await cookies()).get("quizcraft_access")?.value;
      const res = await fetch(`${config.server_url}/topic/create-topic`, {
        method: "POST",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",   
        },
        body: JSON.stringify({ title: topicName }),
      });
      const result = await res.json();
      return result;
}
