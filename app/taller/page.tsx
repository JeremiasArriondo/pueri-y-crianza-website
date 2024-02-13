import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pueri - Melanie Reynoso",
  description: "Website Melanie Reynoso - Puericultora"
};

export default function Taller() {
  return (
    <>
      <main className={"min-h-screen mx-4 pt-4"}>
        <h1 className="text-xl text-violetPrimary">Taller</h1>
        <p>
          Esta sección está en construcción, mientras tanto podes contactarme,
          mira mis redes acá: linkaredes
        </p>
      </main>
    </>
  );
}
