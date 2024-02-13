"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type LinkRoute = {
  label: string;
  slug: string;
  description?: string;
  image: {
    url: string;
  };
};

const links: LinkRoute[] = [
  {
    label: "Guardia de lactancia",
    slug: "https://api.whatsapp.com/send?phone=+5492475405535&text=Hola.%20Necesito%20una%20consulta%20cuanto%20antes.",
    description:
      "Para consultas por problemas comunes o complejos, de manera urgente. Te invito a enviarme tu consulta.",
    image: {
      url: "/images/links/guardia-pueri.png"
    }
  },
  {
    label: "Lactancia",
    slug: "https://api.whatsapp.com/send?phone=+5492475405535&text=Hola.%20Quisiera%20un%20turno%20para%20una%20consulta%20sobre%20lactancia",
    description:
      "Inicio de lactancia, dificultades en la lactancia, prematuros, grietas, mastitis, prevención de dificultades, vuelta al trabajo, conservación de la leche, relactación, inhibición, etc.",
    image: {
      url: "/images/links/pregnant.jpg"
    }
  },
  {
    label: "Consulta virtual Doula",
    slug: "https://api.whatsapp.com/send?phone=+5492475405535&text=Hola.%20Quisiera%20un%20turno%20para%20una%20consulta%20sobre...",
    description:
      "Este espacio está destinado a que la mujer o gestante pueda realizar todo tipo de consultas referidas a su embarazo, parto, puerperio, trabajo de parto, lactancia, etc.",
    image: {
      url: "/images/links/doula.jpeg"
    }
  },
  {
    label: "Destete",
    slug: "https://api.whatsapp.com/send?phone=+5492475405535&text=Hola.%20Quisiera%20un%20turno%20para%20una%20consulta%20sobre...",
    description:
      "¿Qué es el destete? Aprendé a cómo ayudar en la transición de la misma",
    image: {
      url: "/images/links/destete.jpg"
    }
  },
  {
    label: "Alimentación complementaria",
    slug: "https://api.whatsapp.com/send?phone=+5492475405535&text=Hola.%20Quisiera%20un%20turno%20para%20una%20consulta%20sobre...",
    description:
      "Introducción a la alimentación complementaria para cubrir las necesidades nutricionales de un bebé en crecimiento",
    image: {
      url: "/images/links/food-baby.jpg"
    }
  },
  {
    label: "Consulta en Crianza",
    slug: "https://api.whatsapp.com/send?phone=+5492475405535&text=Hola.%20Quisiera%20un%20turno%20para%20una%20consulta%20sobre...",
    description:
      "Aspectos relacionados a la crianza como control de esfínteres, sueño, límites, miedos, apego, etc.",
    image: {
      url: "/images/links/crianza.jpeg"
    }
  },
  {
    label: "Primeros Auxilios",
    slug: "https://api.whatsapp.com/send?phone=+5492475405535&text=Hola.%20Quisiera%20un%20turno%20para%20una%20consulta%20sobre%20primeros%20auxilios",
    description:
      "Praparate para cualquier inconveniente: como actuar, atragantamiento, etc",
    image: {
      url: "/images/links/primeros-auxilios.jpeg"
    }
  }
];

export const CardList = () => {
  return (
    <section className="sectionCards my-8">
      {links.map(({ label, slug, description, image }) => (
        <Link className="text-active" href={slug} key={label}>
          <motion.div
            variants={{
              visible: { scale: 1, transition: { duration: 0.4 } },
              hidden: { scale: 0.6 }
            }}
            initial="hidden"
            whileInView="visible"
          >
            <article
              className="w-full shadow-lg
            dark:border dark:border-violetSecondary
            rounded-2xl overflow-hidden"
            >
              <div className="overflow-hidden">
                <Image
                  src={image.url}
                  alt={label}
                  width="300"
                  height="300"
                  sizes="100vw"
                  className="hover:scale-125 ease-in duration-200"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "200px"
                  }}
                />
              </div>
              <div className="flex flex-col justify-between m-4">
                <h3 className="text-xl text-primary mb-2">{label}</h3>
                <p className="text-gray-400">{description}</p>
              </div>
            </article>
          </motion.div>
        </Link>
      ))}
    </section>
  );
};
