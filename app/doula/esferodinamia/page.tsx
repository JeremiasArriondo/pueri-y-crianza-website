import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esferodinamia",
  description: "Website Melanie Reynoso - Puericultora"
};

export default function Esferodinamia() {
  return (
    <>
      <main className={"min-h-screen mx-4 pt-4"}>
        <h1 className="text-xl text-blueSecondary">Esferodinamia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsum
          deleniti pariatur facere dolorum reprehenderit, architecto molestiae
          assumenda itaque. Architecto sapiente in laboriosam quaerat tempore
          facilis porro quibusdam vitae quas?
        </p>
        <a href="https://api.whatsapp.com/send?phone=+5492475471782&text=Hola,%20te%20comunicaste%20para%20confirmar%20una%20asistencia">
          WhatsApp
        </a>
      </main>
    </>
  );
}
