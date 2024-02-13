import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pueri - Melanie Reynoso",
  description: "Website Melanie Reynoso - Puericultora"
};

export default function Destete() {
  return (
    <>
      <main className={"min-h-screen mx-4 pt-4"}>
        <h1 className="text-xl text-violetPrimary">Destete</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsum
          deleniti pariatur facere dolorum reprehenderit, architecto molestiae
          assumenda itaque. Architecto sapiente in laboriosam quaerat tempore
          facilis porro quibusdam vitae quas?
        </p>
      </main>
    </>
  );
}
