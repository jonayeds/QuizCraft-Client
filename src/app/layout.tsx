import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";



export const metadata: Metadata = {
  title: "QuizCraft",
  description: "A platform for creating and taking quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      cz-shortcut-listen="true"
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
