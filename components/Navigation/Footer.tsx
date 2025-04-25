"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-purple-100 dark:border-purple-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={"/images/logo.webp"}
                alt="Logo PueriyCrianza"
                className="object-cover rounded-full"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Meel
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Acompañamiento en lactancia, crianza y desarrollo infantil.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              Enlaces
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/guias"
                  className="hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Guías
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Acerca de mí
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              Contacto
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>puericultoraydoulamel@gmail.com</li>
              <li>+54 (2475) 405535</li>
              <li className="pt-2">
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:text-purple-600 dark:hover:text-purple-400 p-2"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:text-purple-600 dark:hover:text-purple-400 p-2"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:text-purple-600 dark:hover:text-purple-400 p-2"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-100 dark:border-purple-900 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Meel. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
