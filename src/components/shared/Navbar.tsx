"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { logout } from "@/services/auth/authService";

const Navbar = () => {
  const path = usePathname().split("/")[1];
  const router = useRouter();
  const active = (p: string) => (p === path ? "text-accent" : "");
  const activeUnderline = (p: string) =>
    p === path
      ? "bg-accent h-1 rounded-full absolute bottom-1 left-0 w-full"
      : "hidden";
  const { user, setUser, isLoading } = useUser();
  const handleLogout = async () => {
    await logout();
    setUser(null);
    router.push("/");
  };
  if (isLoading)
    return (
      <div className="justify-between p-4 flex ">
        <div className="w-[5vw] h-6 bg-gradient-to-br from-white/40 to-white/20 rounded-md animate-pulse duration-300  " />
        <div className="w-[40vw] h-6 bg-gradient-to-br from-white/40 to-white/20 rounded-md animate-pulse duration-300  " />
        <div className="w-[10vw] h-6 bg-gradient-to-br from-white/40 to-white/20 rounded-md animate-pulse duration-300  " />
      </div>
    );

  return (
    <div className="fixed top-0 left-0   text-white">
      <div className="flex w-screen justify-between p-4">
        <h1 className="text-2xl font-bold">QuizCraft</h1>
        <div className="flex md:gap-6 gap-4">
          <NavLink href="/" activeText="" title="Home" />
          {user ? 
            user.role === "ADMIN" ?<>
              <NavLink href="/add-topic" activeText="add-topic" title="Add Topic" />
            </>: (<>
              <NavLink href="/my-quizzes" activeText="my-quizzes" title="My Quizzes" />
              <NavLink href="/join-quiz" activeText="join-quiz" title="Join Quiz" />
              <NavLink href="/create-quiz" activeText="create-quiz" title="Create Quiz" />
            </>)
           : (
            <NavLink href="/about" activeText="about" title="About" />
          )}
          <NavLink href="/topics" activeText="topics" title="Topics" />
        </div>
        <div className="flex gap-2">
          {user ? (
            <>
              <Avatar className="size-10 bg-accent border-2 border-primary  flex items-center justify-center">
                <AvatarImage src={user?.profileIamge || ""} />
                <AvatarFallback className="text-xl">
                  {user?.username?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="outline">Register</Button>
              </Link>
            </>
          )}
        </div>
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
  const active = (p: string) => (p === path ? "text-accent" : "");
  const activeUnderline = (p: string) =>
    p === path
      ? "bg-accent h-1 rounded-full absolute bottom-1 left-0 w-full"
      : "hidden";
  return (
    <Link href={href} className="relative">
      <p className={active(activeText)}>{title}</p>
      <div className={activeUnderline(activeText)}></div>
    </Link>
  );
};

export default Navbar;
