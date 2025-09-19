import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/register", "/login"];
const privateRoutes = ["/my-quizzes", "/my-quizzes", "/my-quizzes/created/:path", "/my-quizzes/joined/:path", "/create-quiz"];

export const middleware = (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("quizcraft_access")?.value;
  if (authRoutes.includes(path) && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (privateRoutes.includes(path) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if(path.startsWith("/my-quizzes") && !token){
    return NextResponse.redirect(new URL("/login", req.url));
  }

};

export const config = {
  matcher: ["/login", "/join-quiz", "/register", "/my-quizzes", "/my-quizzes/created/:path", "/my-quizzes/joined/:path", "/create-quiz"],
};
