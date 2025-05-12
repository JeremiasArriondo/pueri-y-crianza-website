"use client";
import { CardList } from "@/components/shared/CardList";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return (
    <main className={"min-h-screen mx-4 md:mx-auto"}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-50 to-transparent dark:from-purple-950"></div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div> */}
      {/* Hero Section */}
      <section className="relative overflow-hidden my-12 md:py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative my-8"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl aspect-square max-w-md mx-auto">
                <Image
                  src={"/images/profile-pic.jpeg"}
                  alt="Meel"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                  Me presento.
                </span>
              </h1>
              <h2 className="text-3xl text-gray-400 md:text-4xl font-medium mb-6">
                Soy Meel,{" "}
                <span className="text-pink-300 dark:text-pink-400">
                  Puericultora
                </span>
                ,
                <br />
                <span className="text-stone-300 dark:text-purple-400">
                  Especialista en alimentación complementaria
                </span>
                ,
                <br />
                <span className="text-green-700 dark:text-green-400">
                  crianza respetuosa
                </span>{" "}
                y{" "}
                <span className="text-blue-800 dark:text-blue-400">Doula</span>.
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
                Mi deseo es acompañar lactancias y crianzas proveyendo
                información actualizada y ayudando en lo que pueda desde mi rol.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="#services">
                  <Button className="w-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-600 hover:to-pink-600 text-white border-0 h-12 px-8 text-lg">
                    Mis Servicios
                  </Button>
                </Link>
                <Link href="/sobre-mi">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-purple-200 dark:border-purple-800 h-12 px-8 text-lg"
                  >
                    Conoceme más
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl text-purple-300 dark:text-purple-700 mb-6">
              "
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 italic">
              Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas,
              puede cambiar el mundo.
            </blockquote>
            <cite className="text-lg text-gray-600 dark:text-gray-400 not-italic">
              — Eduardo Galeano
            </cite>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis Servicios
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Ofrezco acompañamiento personalizado para familias en diferentes
              etapas del embarazo y la crianza.
            </p>
          </motion.div>
          <CardList />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">
                  ¿Necesitas acompañamiento?
                </h2>
                <p className="mb-6 text-white/90">
                  Estoy aquí para apoyarte en tu camino de crianza. Contáctame
                  para una consulta personalizada.
                </p>
                <Button className="rounded-full bg-white text-purple-600 hover:bg-gray-100 gap-2 h-12 px-8">
                  Agenda una consulta
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-8 rounded-full">
                  <Heart className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
