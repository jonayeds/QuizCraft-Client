"use client";
import { Plus } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { addNewTopic } from "@/services/topic/topicService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddTopicForm = () => {
    const [topicName, setTopicName] = useState<string>(""); 
    const router = useRouter()
    const handleAddTopic = async () => {
        if(topicName.trim() === "") return;
        const result = await addNewTopic(topicName)
        if(result?.success){
            setTopicName("")
            toast.success("Topic added successfully")   
            router.push("/topics")  
        }else{
            toast.error(result?.message || "Failed to add topic")   
        }
    }
  return (
    <div className="flex justify-center items-center gap-4 mt-10  ">
      <Input
        className="bg-transparent w-max placeholder:text-white/50"
        placeholder="Topic name"
        value={topicName}
        onChange={(e) => setTopicName(e.target.value)}
      />
      <Plus onClick={handleAddTopic} className="hover:rotate-180 transition-transform duration-500 cursor-pointer size-8" />
    </div>
  );
};

export default AddTopicForm;
