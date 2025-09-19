"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { login } from "@/services/auth/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const form = useForm({
    defaultValues:{
        identification:"",  
        password:""
    }
  });
  const navigate = useRouter();   
  const handleLogin: SubmitHandler<FieldValues> = async(data) => {
    const result = await login(data);
    if(result?.success){
            toast.success("Login Successful")
            navigate.push("/")
            
        }else{
            toast.error(result?.message || "Login Failed")       
        }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className=" md:w-[40%] w-full justify-center flex flex-col gap-4 items-center">
        <FormField
          control={form.control}
          name="identification"
          render={({field}) => (
            <FormItem className="w-full ">
              <FormLabel />
              <FormDescription />
              <FormControl>
                <Input {...field}  placeholder="Email or Username" type="text" value={field.value || ""} onChange={field.onChange} />
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
  );
};

export default LoginForm;
