import LoginForm from "@/components/auth/LoginForm"
import SocialLogin from "@/components/auth/SocialLogin"



const LoginPage = () => {

  return (
    <div className="w-full  max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <span className="text-2xl">🔐</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/70">Sign in to your account</p>
        </div>
        
        <LoginForm/>
        
        <div className="flex items-center my-6">
            <hr className="border-t border-white/20 flex-1" />
            <span className="mx-4 text-white/60 text-sm">Or</span>
            <hr className="border-t border-white/20 flex-1" />
        </div>
        
        <SocialLogin/>
    </div>
  )
}

export default LoginPage