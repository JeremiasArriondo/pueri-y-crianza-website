import { AnimatedText } from "@/components/shared/AnimatedText";
import { QuoteIcon } from "../components/icons/QuoteIcon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CardList } from "@/components/shared/CardList";
import { MotionDiv } from "@/lib/framer";

export const metadata: Metadata = {
  title: "Inicio - Melanie Reynoso",
  description: "Conoce más sobre mis servicios como puericultora y doula"
};

export default function Home() {
  return (
    <main className={"min-h-screen mx-4 md:mx-auto max-w-screen-md"}>
      <article className="w-full flex justify-center my-8 xl:mt-24">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative rounded-lg shadow-lgDark ">
            <div className="z-10 relative overflow-hidden rounded-full p-[3px] m-[-2px] isolate">
              <div className="will-change-transform animate-buttonStroke blur-[4px] origin-[center_center] absolute top-0 left-0 right-0 bottom-0 bg-buttonConicGradient"></div>
              <div className="relative z-100 w-[200px] h-[200px]">
                <Image
                  src={"/images/profile-pic.jpeg"}
                  alt="Profile picture"
                  className="object-cover rounded-full"
                  priority
                  fill
                />
              </div>
            </div>
          </div>
        </MotionDiv>
      </article>

      <section>
        <h1 className="text-4xl text-primary text-center">
          Me presento. <br /> Soy Meel,{" "}
          <span className="text-[#ffcbcb]">Puericultora</span>, <br />
          <span className="text-[#c4b5fd]">
            Especialista en alimentación complementaria
          </span>
          , <span className="text-[#97d6a6]">crianza respetuosa</span> y
          <span className="text-[#7dd3fc]"> Doula.</span>
        </h1>
        <h3 className="my-4 text-primary text-xl">
          Mi deseo es acompañar lactancias y crianzas proveyendo información
          actualizada y ayudando en lo que pueda desde mi rol.
        </h3>
      </section>
      <figure className="mx-auto text-center">
        <blockquote className="text-xl italic font-semibold text-gray-400">
          <QuoteIcon />
          <AnimatedText
            el="p"
            text={[
              "«Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo»"
            ]}
            repeatDelay={10000}
            className="my-4 text-primary text-xl"
          />
        </blockquote>
        <cite className="pr-3 font-medium text-gray-500 ">Eduardo Galeano</cite>
      </figure>
      <CardList />
    </main>
  );
}
