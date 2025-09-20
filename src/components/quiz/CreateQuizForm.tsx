"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { createQuiz } from "@/services/quiz/quizService"
import toast from "react-hot-toast"

const CreateQuizForm = () => {
    const form = useForm()
    const handleCreate:SubmitHandler<FieldValues> = async(data)=>{
        data.totalScore = Number(data.totalScore)
        const result = await createQuiz(data)
        if(result?.success){
            toast.success("Quiz Created Successfully")
            form.reset()      
        }else{
            toast.error(result?.message || "Quiz Creation Failed")
        }
    }
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreate)} className="space-y-6">
          <FormField
            control={form.control}
            name="totalScore"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-white/90 text-sm font-medium">Total Score</FormLabel>
                <FormControl>
                  <Input 
                    {...field}  
                    type="number" 
                    placeholder="Enter maximum score (e.g., 100)" 
                    value={field.value || ""} 
                    onChange={field.onChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 rounded-xl h-14 text-lg"
                  />
                </FormControl>
                <FormMessage className="text-red-200" />
                <FormDescription className="text-white/70 text-sm">
                  Set the maximum possible score for this quiz
                </FormDescription>
              </FormItem>
            )}
          />
          
          <Button 
            className="w-full h-14 bg-white text-[#4d438b] hover:bg-white/90 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]" 
            type="submit"
          >
            <span className="mr-2">🚀</span>
            Create Quiz
          </Button>
        </form>
      </Form>
    </div>
  ) 
}

export default CreateQuizForm