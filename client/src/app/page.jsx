'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "./components/PrimaryButton";
import Login from "./login/page";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const router = useRouter();

  const controlRegisterClick = () => {
    router.push('/register');

  };

  const controlLoginClick = () => {
    router.push('/login');

  };

  return (
    <div className="z-0 flex flex-col h-screen lg:h-full w-full lg:bg-contain bg-[url('/assets/images/mainBg.webp')]">
      <div className="lg:gap-0 lg:grid lg:grid-cols-2 h-full bg-white bg-opacity-80  lg:pl-6">
        <div className="flex flex-col lg:flex-row lg:self-start lg:h-full items-center text-center">
          {/*  div 1 */}
          <div className="lg:hidden w-full h-[8rem] rounded-full shadow-md">
            <Image
              // src="/assets/images/Logo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-wrap pt-2 sm:py-4">
            <Image src="/assets/images/C.png" height={80} width={80} className="hidden lg:block" />
            <Image src="/assets/images/L.png" height={80} width={80} className="hidden lg:block" />
            <div className="flex-col m-auto">
              <p className="text-2xl tracking-2 font-damion">
                La comunidad de refugios
              </p>
              <div className="flex flex-col text-center gap-4 sm:gap-6 lg:m-auto pt-4 sm:px-[14%] md:px-[30%]">
              <p className="m-auto">Para ser aspirante</p>
              <h2 className="text-2xl font-bold">¡Regístrate hoy!</h2>
              <PrimaryButton text="Registrarse" onClick={controlRegisterClick} />
            </div>
              <div className="underline relative mx-3 py-3 hidden sm:block lg:hidden">
                <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center hidden lg:block">
          {/*  div 2 */}
          <h2 className="text-2xl text-center tracking-2 font-damion">
            ¡Bienvenido!
          </h2>
          <Login
            setIsAuthenticated={setIsAuthenticated}
            isAuthenticated={isAuthenticated}
          />
        </div>
        <div className="flex flex-col items-center justify-center h-30">
          {/*  div 3 */}
        </div>
        <div className="underline relative mx-3 lg:hidden">
          <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
        </div>
        <div className="px-4 pb-4 w-full flex flex-col gap-4 text-center ">
          {/*  div 4 */}
          <div>
            {/* <div className="flex flex-col text-center gap-4 sm:gap-6 lg:m-auto pt-4 sm:px-[14%] md:px-[30%]">
              <p className="m-auto">Para ser aspirante</p>
              <h2 className="text-2xl font-bold">¡Regístrate hoy!</h2>
              <PrimaryButton text="Registrarse" onClick={controlRegisterClick} />
            </div> */}
          </div>

          <div className="flex flex-col lg:hidden">
            <p className="text-lg">
              Si ya tienes una cuenta inicia sesión
              <span>
                <a
                  onClick={controlLoginClick}
                  className="text-blue-500 hover:text-blue-700 ml-1"
                >
                  aquí.
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
