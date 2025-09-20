import { NextRequest, NextResponse } from "next/server";
import { getUserFromToken } from "./services/auth/authService";

const authRoutes = ["/register", "/login"];
const privateRoutes = [
  "/my-quizzes",
  "/my-quizzes",
  "/my-quizzes/created/:path",
  "/my-quizzes/joined/:path",
  "/create-quiz",
];
const adminRoutes = [
  "/add-topic"
]

export const middleware = async(req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const user = await getUserFromToken()
  if(adminRoutes.includes(path) && user?.role !== "ADMIN"){
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (authRoutes.includes(path) && user) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (privateRoutes.includes(path) && !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (path.startsWith("/my-quizzes") && !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

};

export const config = {
  matcher: [
    "/login",
    "/join-quiz",
    "/register",
    "/my-quizzes",
    "/my-quizzes/created/:path",
    "/my-quizzes/joined/:path",
    "/create-quiz",
    "/add-topic"
  ],
};
