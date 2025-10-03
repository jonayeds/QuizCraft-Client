"use client";
import { googleLogin } from "@/services/auth/authService";
import { Globe } from "lucide-react";

const SocialLogin = () => {
    const handleGoogleLogin = async() => {
        await googleLogin()
    }
  return (
    <button onClick={handleGoogleLogin} className="w-full cursor-pointer bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl px-6 py-3 font-medium transition-all duration-200 flex items-center justify-center">
      <Globe className="mr-2 h-5 w-5" />
      Login with Google
    </button>
  );
};

export default SocialLogin;
