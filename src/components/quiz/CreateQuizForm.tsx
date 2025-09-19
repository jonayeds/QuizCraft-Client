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
        console.log(data)
        const result = await createQuiz(data)
        console.log(result)
        if(result?.success){
            toast.success("Quiz Created Successfully")
            form.reset()      
        }else{
            toast.error(result?.message || "Quiz Creation Failed")
        }
    }
  return (
    <div className="bg-white rounded-4xl mt-6 min-h-[60vh] p-4 text-black flex items-center justify-center">
         <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreate)} className=" md:w-[40%] w-full justify-center flex flex-col gap-4 items-center">
        <FormField
          control={form.control}
          name="totalScore"
          render={({field}) => (
            <FormItem className="w-full ">
              <FormLabel />
              <FormDescription />
              <FormControl>
                <Input {...field}  type="number" placeholder="Total Score" value={field.value || ""} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className=" w-full mt-4" type="submit">Create</Button>
      </form>
    </Form>
    </div>
  ) 
}

export default CreateQuizForm