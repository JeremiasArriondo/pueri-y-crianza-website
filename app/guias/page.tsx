"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { guides } from "@/data/constants";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white dark:from-purple-950 dark:to-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-900/20 dark:to-pink-900/20"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Descubre mis guías
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Recursos confiables y diseñados con amor para acompañarte en la
              lactancia y los primeros pasos de la alimentación de tu bebé.
            </p>
          </motion.div>
        </div>
      </section>
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* <Link href={`/guia/${guide.id}`}> */}
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-[1.02]">
                <div className="p-1">
                  <div
                    className={`${guide.gradient} rounded-t-lg p-6 text-white`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-4xl">{guide.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mt-4">{guide.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {guide.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {guide.pages} páginas
                      </span>
                      <Link href={`/guias/${guide.slug}`}>
                        <Button className="rounded-full gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                          <Download className="h-4 w-4" />
                          Descargar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
              {/* </Link> */}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
