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
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleJoin)} className="space-y-6">
          <FormField
            control={form.control}
            name="joiningCode"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-white/90 text-sm font-medium">Quiz Code</FormLabel>
                <FormControl>
                  <Input 
                    {...field}  
                    type="text" 
                    placeholder="Enter 6-digit code" 
                    value={field.value || ""} 
                    onChange={field.onChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 rounded-xl h-14 text-lg font-mono tracking-wider text-center"
                  />
                </FormControl>
                <FormMessage className="text-red-200" />
                <FormDescription className="text-white/70 text-sm text-center">
                  Ask the quiz creator for the joining code
                </FormDescription>
              </FormItem>
            )}
          />
          
          <Button 
            className="w-full h-14 bg-white text-[#4d438b] hover:bg-white/90 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]" 
            type="submit"
          >
            Join Quiz
          </Button>
        </form>
      </Form>
    </div>
  ) 
}

export default JoinQuizForm