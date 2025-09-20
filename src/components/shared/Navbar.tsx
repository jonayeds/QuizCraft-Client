"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { logout } from "@/services/auth/authService";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser, isLoading } = useUser();
  
  const handleLogout = async () => {
    await logout();
    setUser(null);
    router.push("/");
    setIsMenuOpen(false);
  };

  if (isLoading)
    return (
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#907CD3]/95 to-[#4d438b]/95 backdrop-blur-md border-b border-white/20 z-50">
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="w-32 h-6 bg-white/20 rounded-md animate-pulse" />
          <div className="hidden md:flex gap-4">
            <div className="w-16 h-6 bg-white/20 rounded-md animate-pulse" />
            <div className="w-20 h-6 bg-white/20 rounded-md animate-pulse" />
            <div className="w-24 h-6 bg-white/20 rounded-md animate-pulse" />
          </div>
          <div className="w-20 h-8 bg-white/20 rounded-md animate-pulse" />
        </div>
      </div>
    );

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#907CD3]/95 to-[#4d438b]/95 backdrop-blur-sm border-b border-white/20 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <span className="text-lg">🎯</span>
              </div>
              <h1 className="text-2xl font-bold text-white">QuizCraft</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" activeText="" title="Home" />
            {user ? 
              user.role === "ADMIN" ? (
                <NavLink href="/add-topic" activeText="add-topic" title="Add Topic" />
              ) : (
                <>
                  <NavLink href="/my-quizzes" activeText="my-quizzes" title="My Quizzes" />
                  <NavLink href="/join-quiz" activeText="join-quiz" title="Join Quiz" />
                  <NavLink href="/create-quiz" activeText="create-quiz" title="Create Quiz" />
                </>
              ) : (
                <NavLink href="/about" activeText="about" title="About" />
              )}
            <NavLink href="/topics" activeText="topics" title="Topics" />
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10 border-2 border-white/30 bg-white/20  shadow-lg flex items-center justify-center ">
                  <AvatarImage src={user?.profileIamge || ""} />
                  <AvatarFallback className=" text-white font-semibold">
                    {user?.username?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <Button 
                  onClick={handleLogout}
                  className="hidden sm:inline-flex bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm rounded-xl px-4 py-2 transition-all duration-200"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-3">
                <Link href="/login">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm rounded-xl px-4 py-2 transition-all duration-200">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-white text-[#4d438b] hover:bg-white/90 rounded-xl px-4 py-2 font-medium transition-all duration-200">
                    Register
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4 space-y-4">
            <MobileNavLink href="/" activeText="" title="Home" onClick={() => setIsMenuOpen(false)} />
            {user ? 
              user.role === "ADMIN" ? (
                <MobileNavLink href="/add-topic" activeText="add-topic" title="Add Topic" onClick={() => setIsMenuOpen(false)} />
              ) : (
                <>
                  <MobileNavLink href="/my-quizzes" activeText="my-quizzes" title="My Quizzes" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavLink href="/join-quiz" activeText="join-quiz" title="Join Quiz" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavLink href="/create-quiz" activeText="create-quiz" title="Create Quiz" onClick={() => setIsMenuOpen(false)} />
                </>
              ) : (
                <MobileNavLink href="/about" activeText="about" title="About" onClick={() => setIsMenuOpen(false)} />
              )}
            <MobileNavLink href="/topics" activeText="topics" title="Topics" onClick={() => setIsMenuOpen(false)} />
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-white/20 space-y-3">
              {user ? (
                <Button 
                  onClick={handleLogout}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl py-3"
                >
                  Logout
                </Button>
              ) : (
                <div className="space-y-3">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block">
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl py-3">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)} className="block">
                    <Button className="w-full bg-white text-[#4d438b] hover:bg-white/90 rounded-xl py-3">
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const NavLink = ({
  href,
  activeText,
  title,
}: {
  href: string;
  activeText: string;
  title: string;
}) => {
  const path = usePathname().split("/")[1];
  const isActive = activeText === path;
  
  return (
    <Link href={href} className="relative group">
      <span className={`text-sm font-medium transition-colors duration-200 ${
        isActive ? "text-white" : "text-white/80 hover:text-white"
      }`}>
        {title}
      </span>
      <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-transform duration-200 ${
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`} />
    </Link>
  );
};

const MobileNavLink = ({
  href,
  activeText,
  title,
  onClick,
}: {
  href: string;
  activeText: string;
  title: string;
  onClick: () => void;
}) => {
  const path = usePathname().split("/")[1];
  const isActive = activeText === path;
  
  return (
    <Link href={href} onClick={onClick} className="block">
      <div className={`px-4 py-3 rounded-xl transition-colors duration-200 ${
        isActive 
          ? "bg-white/20 text-white" 
          : "text-white/80 hover:bg-white/10 hover:text-white"
      }`}>
        <span className="text-sm font-medium">{title}</span>
      </div>
    </Link>
  );
};

export default Navbar;
