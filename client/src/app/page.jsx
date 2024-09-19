"use client";
import { useState } from "react";
import Login from "./login/page";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="z-0 flex flex-col h-screen lg:h-full w-full lg:bg-contain bg-[url('/assets/images/mainBg.webp')]">
      <div className="flex-col items-center justify-center hidden lg:block">
        <Login
          setIsAuthenticated={setIsAuthenticated}
          isAuthenticated={isAuthenticated}
        />
      </div>
    </div>
  );
}
