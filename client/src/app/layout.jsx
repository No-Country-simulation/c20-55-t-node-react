import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AdoptApp",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children} <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/"className="text-2xl font-bold text-gray-800">MiLogo
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#about"className="text-gray-800 hover:text-gray-600">Sobre Nosotros
            </Link>
            <Link href="#services"className="text-gray-800 hover:text-gray-600">Servicios
            </Link>
            <Link href="#contact"className="text-gray-800 hover:text-gray-600">Contacto
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </body>
    </html>
  );
}
