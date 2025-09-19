"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {  joinQuiz } from "@/services/quiz/quizService"
import toast from "react-hot-toast"

const JoinQuizForm = () => {
    const form = useForm()
    const handleJoin:SubmitHandler<FieldValues> = async(data)=>{
        const result = await joinQuiz(data.joiningCode)
        if(result?.success){
            toast.success("Joined Quiz Successfully")
            form.reset()      
        }else{
            toast.error(result?.message || "Quiz Joining Failed")
        }
    }
  return (
    <div className="bg-white rounded-4xl mt-6 min-h-[60vh] p-4 text-black flex items-center justify-center">
         <Form {...form}>
      <form onSubmit={form.handleSubmit(handleJoin)} className=" md:w-[40%] w-full justify-center flex flex-col gap-4 items-center">
        <FormField
          control={form.control}
          name="joiningCode"
          render={({field}) => (
            <FormItem className="w-full ">
              <FormLabel />
              <FormDescription />
              <FormControl>
                <Input {...field}  type="text" placeholder="Joining Code" value={field.value || ""} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className=" w-full mt-4" type="submit">Join</Button>
      </form>
    </Form>
    </div>
  ) 
}

export default JoinQuizForm