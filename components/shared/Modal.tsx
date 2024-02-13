import Link from "next/link";
import type React from "react";
import { CloseIcon } from "../icons/CloseIcon";

type ModalProps = {
  visible: Boolean;
  onClose: () => void;
};

export default function Modal({ visible, onClose }: ModalProps) {
  const handleOnClose = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.id === "container") {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="absolute top-4 left-4 bg-white p-6 border border-violetSecondary rounded-3xl w-72">
        <div className="flex flex-row justify-between">
          <ul className="">
            <li className="text-xl hover:text-violetSecondary">
              <Link href={"/"}>Inicio</Link>
            </li>
            <li className="text-xl hover:text-violetSecondary">
              <Link href={"/"}>Acerca de</Link>
            </li>
            <li className="text-xl hover:text-violetSecondary">
              <Link href={"/"}>Talleres</Link>
            </li>
            <li className="text-xl hover:text-violetSecondary">
              <Link href={"/"}>Mis redes</Link>
            </li>
          </ul>
          <div className="text-right">
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
