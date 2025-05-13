import { TimeLine } from "@/components/TimeLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pueri - Melanie Reynoso",
  description: "Website Melanie Reynoso - Puericultora"
};

export default function SobreMi() {
  return (
    <main className={"min-h-screen mx-4 md:mx-auto max-w-screen-md"}>
      <div className="flex flex-col gap-4 xl:mt-24">
        {/* <div>
          <h2 className="text-xl text-center py-2 rounded-3xl my-4 bg-pink-100 text-black dark:text-black">
            Acerca de mí
          </h2>
          <p className="text-primary">
            Soy una persona proactiva, organizada y responsable. Me capacité de
            la manera mas amplia posible para dedicar mis conocimientos a las
            flamilias, con el deseo de acompañarlas en lo que deseen. Siempre
            tengo la mejor disposición para la realización de mi trabajo y sigo
            en continuo aprendizaje en lo que mas pueda para llevar a cada hogar
            informacion actualizada y proveerles la empatia y el respeto que
            merecen. Busco un puesto donde pueda ser util para acompañar desde
            mi rol, sea presencial o virtual.
          </p>
        </div> */}
        <div>
          <h2 className="text-xl text-center py-2 rounded-3xl my-4 bg-pink-100 text-black dark:text-black">
            Contacto
          </h2>
          <ul className="list-disc list-inside text-primary">
            <li>Celular: 2475471782</li>
            <li>Correo: puericultoraydoulamel@gmail.com</li>
            <li>Ciudad: Rojas</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-center py-2 rounded-3xl my-4 bg-pink-100 text-black dark:text-black">
            Experiencia
          </h2>
          <ul className="list-disc list-inside text-primary">
            <li>Practicas no remuneradas</li>
            <li>Resolucion de casos clinicos</li>
            <li>Talleres</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-center py-2 rounded-3xl my-4 bg-pink-100 text-black dark:text-black">
            Educación
          </h2>
          <TimeLine />
        </div>
      </div>
      <div className="my-8 text-primary w-full">
        <h3 className="my-2">Acá podes descargar mi Curriculum Vitae: </h3>
        <a
          href="/assets/Melanie-Reynoso-CV.pdf"
          download="Melanie Reynoso - CV.pdf"
          className="py-2 border block text-center border-pink-200 text-pink-600 rounded-3xl bg-pink-50 "
        >
          Descarga mi CV
        </a>
      </div>
    </main>
  );
}
