"use client";
import { menuItems } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { MenuIcon } from "../icons/MenuIcon";
import { ThemeSwitch } from "../ThemeSwitch";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const openMenuMobile = () => setOpen(!open);

  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-purple-100 dark:border-purple-900">
      <nav className="container flex p-4 justify-between items-center relative md:mx-auto">
        <div className="sm:hidden">
          <button onClick={openMenuMobile} className="block">
            {open ? (
              <CloseIcon
                className="transition-opacity duration-500 ease-in-out opacity-1"
                fill="#6d28d9"
              />
            ) : (
              <MenuIcon
                className="transition duration-500 ease-in-out"
                fill="#6d28d9"
              />
            )}
          </button>
        </div>
        <ul className="hidden sm:flex gap-4">
          {menuItems.map(({ path, name }) => (
            <li
              key={name}
              className="text-xl hover:text-violetSecondary dark:hover:text-violetPrimary"
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-4 px-2 md:px-0">
          <div className="hidden sm:block">
            <ThemeSwitch />
          </div>
          <Link href={"/"}>
            <Image
              src={"/images/logo.webp"}
              alt="Logo PueriyCrianza"
              className="object-cover rounded-full"
              width={40}
              height={40}
            />
          </Link>
        </div>
        {open && (
          <div
            className="absolute top-[59px] left-0 w-full p-4 bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 border-b border-violetSecondary md:block md:w-auto"
            ref={menuRef}
          >
            <ul className="flex flex-col gap-4">
              {menuItems.map(({ path, name }) => (
                <li
                  key={name}
                  className="text-xl text-primary hover:text-violetSecondary"
                >
                  <Link href={path} onClick={handleLinkClick}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 inline-flex sm:hidden">
              <ThemeSwitch />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
