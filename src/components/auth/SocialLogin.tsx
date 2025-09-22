"use client";
import { googleLogin } from "@/services/auth/authService";

const SocialLogin = () => {
    const handleGoogleLogin = async() => {
        await googleLogin()
    }
  return (
    <button onClick={handleGoogleLogin} className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl px-6 py-3 font-medium transition-all duration-200 flex items-center justify-center">
      <span className="mr-2">🌐</span>
      Login with Google
    </button>
  );
};

export default SocialLogin;
