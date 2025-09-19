import RegisterForm from "@/components/auth/RegisterForm"


const RegisterPage = () => {
  return (
     <div className="w-[90vw] md:w-[60vw]  md:min-h-[70vh] min-h-[80vh] text-black bg-white rounded-4xl shadow-2xl p-4 flex flex-col justify-center items-center ">
        <h1 className="text-center text-4xl font-extralight my-4">Register</h1>
        <RegisterForm/>
        <div className="md:w-[50%] w-full flex items-center my-4">
        <hr className="border-t border-gray-200 flex-1" />
        <span className="mx-4">Or</span>
        <hr className="border-t border-gray-200 flex-1" />
        </div>
      <div className="border-primary border-1 rounded-sm font-extralight px-6 py-2 cursor-pointer">
        <p>Continue with Google</p>
      </div>
    </div>
  )
}

export default RegisterPage