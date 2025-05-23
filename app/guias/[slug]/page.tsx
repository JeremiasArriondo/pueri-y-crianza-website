import { FreeBadge } from "@/components/free-badge";
import { Payment } from "@/components/payment";
import { Button } from "@/components/ui/button";
import { guides } from "@/data/constants";
import { BookOpen, Clock, FileText, Star } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

type Params = Promise<{
  slug: string;
}>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) {
    return;
  }

  const { title, description } = guide;
  return {
    metadataBase: new URL("https://pueri-y-crianza.vercel.app"),
    title: title,
    description: description
  };
}

export default async function GuiaDetalle(props: { params: Params }) {
  const params = await props.params;
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        Guía no encontrada
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado de la guía */}
        <div className={`rounded-lg overflow-hidden mb-8 shadow-lg`}>
          <div className={`h-3 bg-gradient-to-r ${guide.gradient}`}></div>
          <div className={`${guide.bg} text-white p-8`}>
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <BookOpen className="h-8 w-8" />
              </div>
              {/* {guide.popular && (
                <Badge className="bg-white/20 hover:bg-white/30 text-white">
                  Popular
                </Badge>
              )} */}
            </div>
            <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
            <p className="text-lg opacity-90 mb-6">{guide.longDescription}</p>
            <div className="flex flex-col gap-4">
              {guide.free ? (
                <div className="bg-green-500/30 rounded-lg py-2 px-4 inline-block">
                  <FreeBadge
                    variant="outline"
                    className="border-white/70 text-white mr-2"
                  />
                  <span className="text-white/90">Descarga gratuita</span>
                </div>
              ) : (
                <div className="bg-white/20 rounded-lg py-2 px-4 inline-block">
                  <span className="text-2xl font-bold">${guide.price}</span>
                  <span className="text-white/70 ml-1 text-sm">ARS</span>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-current text-yellow-300 mr-1" />
                  {/* <span className="font-medium">{guide.rating}</span> */}
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-1" />
                  <span>{guide.pages} páginas</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>~{Math.round(guide.pages * 2)} min de lectura</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Temas</h2>
              <div className="space-y-4">
                {guide.chapters.map((chapter, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium">{chapter.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Lo que aprenderás</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <div
                    className={`h-5 w-5 rounded-full ${guide.bg} flex items-center justify-center mt-0.5 mr-2 flex-shrink-0`}
                  >
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Conceptos fundamentales sobre el tema</span>
                </li>
                <li className="flex items-start">
                  <div
                    className={`h-5 w-5 rounded-full ${guide.bg} flex items-center justify-center mt-0.5 mr-2 flex-shrink-0`}
                  >
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Aplicación práctica de conocimientos</span>
                </li>
                <li className="flex items-start">
                  <div
                    className={`h-5 w-5 rounded-full ${guide.bg} flex items-center justify-center mt-0.5 mr-2 flex-shrink-0`}
                  >
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Soluciones a problemas comunes</span>
                </li>
                <li className="flex items-start">
                  <div
                    className={`h-5 w-5 rounded-full ${guide.bg} flex items-center justify-center mt-0.5 mr-2 flex-shrink-0`}
                  >
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Consejos de expertos en la materia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
              {guide.free ? (
                <div className="text-center">
                  <div className="mb-4 inline-block bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <FreeBadge size="lg" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Guía gratuita</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Esta guía es completamente gratuita. Descárgala ahora y
                    comienza a aprender.
                  </p>

                  <a href={`/guias/${guide.slug}.pdf`} download>
                    <Button
                      className={`w-full bg-green-600 hover:bg-green-700 mb-4`}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Descargar guía
                    </Button>
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    No se requiere registro. Descarga inmediata en formato PDF.
                  </p>
                </div>
              ) : (
                <Payment
                  price={guide.price}
                  bgColor={guide.bg}
                  title={guide.title}
                  guideSlug={guide.slug}
                />
              )}

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <h3 className="font-medium mb-3">También te puede interesar</h3>
                <div className="space-y-3">
                  {Object.entries(guides)
                    .filter(([slug]) => slug !== params.slug)
                    .slice(0, 3)
                    .map(([slug, otherGuia]) => (
                      <Link
                        href={`/guias/${otherGuia.slug}`}
                        key={slug}
                        className="block p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                      >
                        <h4 className="font-medium text-sm">
                          {otherGuia.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {otherGuia.pages} páginas
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
