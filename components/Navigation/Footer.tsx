"use client";
import { GmailIcon } from "../icons/GmailIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { WspIcon } from "../icons/WspIcon";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative w-full border-t border-violet-400 dark:border-violetSecondary">
      <div className="flex flex-col sm:flex-row items-center justify-center py-2 text-active">
        <div className="flex gap-2">
          <motion.a
            className="text-gray-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/pueriycrianza/?igsh=MXhiMXZrZmxvaTRxdg%3D%3D"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring" }
            }}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            className="text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=+5492475405535"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring" }
            }}
          >
            <WspIcon />
          </motion.a>
          <motion.a
            className="text-gray-500"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:puericultoraydoulamel@gmail.com"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring" }
            }}
          >
            <GmailIcon />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
