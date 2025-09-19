"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { register } from "@/services/auth/authService"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useUser } from "@/context/UserContext"

const RegisterForm = () => {
    const form = useForm({
        defaultValues:{
            email:"",
            username:"",
            password:"",
            name:"" 
        }
    })
    const navigate = useRouter()
    const {setUser} = useUser()
    const handleRegistration:SubmitHandler<FieldValues> = async(data)=>{
        const result = await register(data)
        if(result?.success){
            toast.success("Registration Successful")
            setUser(result.data.data)
            navigate.push("/")
            
        }else{
            toast.error(result?.message || "Registration Failed")       
        }

    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleRegistration)} className=" md:w-[40%] w-full justify-center flex flex-col gap-4 items-center">
        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem className="w-full ">
              <FormLabel />
              <FormDescription />
              <FormControl>
                <Input {...field}  placeholder="Name" type="text" value={field.value || ""} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem className="w-full ">
              <FormLabel />
              <FormDescription />
              <FormControl>
                <Input {...field}  placeholder="Email" type="email" value={field.value || ""} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({field}) => (
            <FormItem className="w-full ">
              <FormLabel />
              <FormDescription />
              <FormControl>
                <Input {...field}  placeholder="Username" type="text" value={field.value || ""} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({field}) => (
            <FormItem className="w-full ">
              <FormLabel />
              <FormDescription />
              <FormControl>
                <Input {...field}  type="password" placeholder="Password" value={field.value || ""} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className=" w-full mt-4" type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default RegisterForm