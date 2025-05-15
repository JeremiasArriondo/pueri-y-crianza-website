import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { guides } from "@/data/constants";
import {
  Apple,
  Baby,
  CheckCircle,
  Clock,
  FileText,
  Heart,
  MessageCircle,
  Send,
  Smile,
  Stethoscope
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pueri - Melanie Reynoso",
  description: "Website Melanie Reynoso - Puericultora"
};

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white dark:from-purple-950 dark:to-slate-900">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-6">
            Consultas personalizadas
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Un espacio seguro donde te sentirás escuchada, contenida y
            acompañada sin juicios, en cualquier etapa de tu maternidad.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* How is a consultation with me */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">
                  ¿Cómo es una consulta conmigo?
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Mis consultas están pensadas para que te sientas escuchada,
                contenida y acompañada sin juicios. No importa en qué etapa
                estés: si estás gestando, tenés un bebé recién nacido, un niño
                en etapa de alimentación complementaria o simplemente necesitás
                guía para criar con más tranquilidad y respeto… estoy acá para
                vos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-purple-50 dark:bg-purple-900/40 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h3 className="font-medium">Atención personalizada</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Cada consulta se adapta a tus necesidades específicas y a
                      las de tu bebé.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50 dark:bg-purple-900/40 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h3 className="font-medium">Espacio seguro</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Un ambiente libre de juicios donde puedes expresar tus
                      preocupaciones.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Topics we can discuss */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">
                  ¿Qué temas podemos tratar en una consulta?
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                En una consulta conmigo podés abordar, entre muchos otros:
              </p>

              <Tabs defaultValue="lactancia" className="w-full">
                <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-6">
                  <TabsTrigger
                    value="lactancia"
                    className="flex items-center gap-2"
                  >
                    <Baby className="h-4 w-4" />
                    <span>Lactancia</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="alimentacion"
                    className="flex items-center gap-2"
                  >
                    <Apple className="h-4 w-4" />
                    <span>Alimentación</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="crianza"
                    className="flex items-center gap-2"
                  >
                    <Smile className="h-4 w-4" />
                    <span>Crianza</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="embarazo"
                    className="flex items-center gap-2"
                  >
                    <Stethoscope className="h-4 w-4" />
                    <span>Embarazo</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="lactancia" className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                    🤱 Lactancia
                  </h3>
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        ¿Cómo me preparo para amamantar desde el embarazo?
                      </AccordionTrigger>
                      <AccordionContent>
                        Podemos trabajar en la preparación física y emocional
                        para la lactancia, conocer las señales de hambre del
                        bebé, y aprender posiciones cómodas para amamantar.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        ¿Cómo sé si mi bebé toma suficiente leche?
                      </AccordionTrigger>
                      <AccordionContent>
                        Aprenderás a reconocer las se��ales de saciedad, a
                        interpretar los pañales, y a entender el comportamiento
                        normal de un bebé bien alimentado.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Dolor al amamantar, grietas o mastitis: ¿qué hago?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te guiaré con técnicas específicas para aliviar el
                        dolor, prevenir y tratar grietas, y manejar o prevenir
                        la mastitis de manera efectiva.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        ¿Qué hago si mi bebé no se prende bien?
                      </AccordionTrigger>
                      <AccordionContent>
                        Trabajaremos en técnicas de agarre, posiciones
                        alternativas, y estrategias para facilitar una lactancia
                        cómoda y efectiva.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        ¿Qué pasa si llora todo el tiempo al pecho?
                      </AccordionTrigger>
                      <AccordionContent>
                        Analizaremos las posibles causas del llanto durante la
                        lactancia y desarrollaremos estrategias personalizadas
                        para calmar a tu bebé.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        ¿Puedo combinar lactancia y fórmula?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te orientaré sobre cómo mantener la lactancia mientras
                        introduces fórmula, minimizando el impacto en tu
                        producción de leche.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger>
                        ¿Cómo me organizo para volver al trabajo y seguir
                        amamantando?
                      </AccordionTrigger>
                      <AccordionContent>
                        Desarrollaremos un plan personalizado para extraer,
                        almacenar y ofrecer tu leche mientras estás trabajando,
                        manteniendo el vínculo de lactancia.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                      <AccordionTrigger>
                        ¿Cómo hago un destete respetuoso?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te guiaré en el proceso de destete gradual y respetuoso,
                        adaptado al ritmo de tu bebé y tus necesidades.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="alimentacion" className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                    🥑 Alimentación complementaria y BLW
                  </h3>
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        ¿Cuándo y cómo empiezo con la alimentación?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te orientaré sobre el momento adecuado para iniciar la
                        alimentación complementaria y las mejores estrategias
                        para una transición suave.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        ¿Qué alimentos son seguros? ¿Cuáles deben esperar?
                      </AccordionTrigger>
                      <AccordionContent>
                        Aprenderás qué alimentos son apropiados para cada etapa
                        y cuáles conviene postergar, basado en evidencia
                        científica actualizada.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        ¿Qué es el BLW y cómo se hace paso a paso?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te explicaré en detalle el método Baby-Led Weaning, sus
                        beneficios y cómo implementarlo de manera segura y
                        efectiva.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        ¿Cómo ofrecer comida sin forzar?
                      </AccordionTrigger>
                      <AccordionContent>
                        Desarrollaremos estrategias para crear un ambiente
                        positivo alrededor de la comida, respetando las señales
                        de hambre y saciedad de tu hijo.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        ¿Mi bebé no quiere comer: es normal?
                      </AccordionTrigger>
                      <AccordionContent>
                        Analizaremos las posibles causas del rechazo a la comida
                        y desarrollaremos estrategias adaptadas a tu situación
                        específica.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        ¿Cuáles son los riesgos de atragantamiento y cómo
                        prevenirlos?
                      </AccordionTrigger>
                      <AccordionContent>
                        Aprenderás a diferenciar entre arcadas normales y
                        atragantamiento, cómo preparar alimentos seguros, y
                        técnicas básicas de primeros auxilios.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger>
                        ¿Qué hago si sospecho alergia o rechazo?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te orientaré sobre cómo identificar posibles alergias o
                        intolerancias y los pasos a seguir si sospechas que tu
                        hijo tiene una reacción adversa.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                      <AccordionTrigger>
                        ¿Cómo armar un menú saludable semanal?
                      </AccordionTrigger>
                      <AccordionContent>
                        Trabajaremos juntas en la planificación de menús
                        equilibrados y prácticos, adaptados a las necesidades
                        nutricionales de tu hijo y la dinámica familiar.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="crianza" className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                    👶 Crianza respetuosa
                  </h3>
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        ¿Cómo acompaño el llanto sin dejar llorar?
                      </AccordionTrigger>
                      <AccordionContent>
                        Aprenderás técnicas para contener y acompañar el llanto
                        de tu hijo, entendiendo sus necesidades emocionales sin
                        recurrir al método de "dejar llorar".
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        ¿Qué son los límites con respeto?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te guiaré en cómo establecer límites claros y firmes
                        mientras mantienes una conexión emocional positiva con
                        tu hijo.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        ¿Qué hago en una crisis de berrinche?
                      </AccordionTrigger>
                      <AccordionContent>
                        Desarrollaremos estrategias para manejar los berrinches
                        de manera respetuosa, entendiendo las necesidades
                        emocionales detrás de estas expresiones.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        ¿Cómo poner rutinas sin gritar?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te ayudaré a establecer rutinas predecibles y efectivas
                        utilizando técnicas de comunicación positiva y
                        estrategias de cooperación.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        ¿Cómo abordar los celos entre hermanos?
                      </AccordionTrigger>
                      <AccordionContent>
                        Trabajaremos en estrategias para facilitar una relación
                        positiva entre hermanos, manejando los celos y
                        fomentando el vínculo fraternal.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        ¿Cómo regularme cuando me siento desbordada?
                      </AccordionTrigger>
                      <AccordionContent>
                        Aprenderás técnicas de autorregulación emocional para
                        manejar momentos de estrés y frustración en la crianza
                        diaria.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger>
                        ¿Cómo cuidar mi vínculo sin perderme como mujer?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te acompañaré en el proceso de encontrar equilibrio
                        entre tu rol de madre y tu identidad personal,
                        estableciendo límites saludables.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="embarazo" className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                    🤰 Embarazo y posparto
                  </h3>
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        ¿Cómo me preparo emocionalmente para el parto?
                      </AccordionTrigger>
                      <AccordionContent>
                        Trabajaremos en técnicas de preparación emocional,
                        manejo de expectativas y herramientas para afrontar el
                        parto con confianza y serenidad.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        ¿Qué necesito saber para los primeros días del bebé?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te orientaré sobre los aspectos prácticos y emocionales
                        de los primeros días con tu bebé, desde el cuidado
                        básico hasta la adaptación familiar.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        ¿Qué pasa si tengo un parto por cesárea?
                      </AccordionTrigger>
                      <AccordionContent>
                        Hablaremos sobre la recuperación física y emocional
                        después de una cesárea, y cómo establecer el vínculo y
                        la lactancia en estas circunstancias.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        ¿Qué es el puerperio real y cómo atravesarlo con amor?
                      </AccordionTrigger>
                      <AccordionContent>
                        Te acompañaré a entender los cambios físicos, hormonales
                        y emocionales del puerperio, con estrategias para
                        transitarlo de manera consciente y amorosa.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        ¿Qué necesita el acompañante para sostenerme?
                      </AccordionTrigger>
                      <AccordionContent>
                        Orientaré sobre cómo tu pareja o acompañante puede
                        brindarte el mejor apoyo durante el embarazo, parto y
                        posparto, fortaleciendo el vínculo familiar.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </section>

            {/* Session duration */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">¿Cuánto dura una sesión?</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                La consulta no tiene un tiempo límite, porque tus dudas y tu
                historia importan. Algunas veces hablamos de un tema puntual
                (como mejorar el agarre del pecho o armar una rutina de
                alimentación), y otras veces surgen temas más complejos (como
                ansiedad, dolor, inseguridad, múltiples dudas). Por eso, la
                atención es completamente personalizada: me adapto a vos y a tu
                bebé.
              </p>
            </section>

            {/* After the session */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">
                  ¿Qué pasa después de la sesión?
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Después de nuestra consulta te enviaré por escrito todo lo que
                trabajamos, para que no tengas que recordar cada detalle y
                puedas leerlo tranquila cuando lo necesites.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  Seguimiento personalizado
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  En muchos casos hago seguimiento personalizado, especialmente
                  cuando hay situaciones que requieren acompañamiento sostenido
                  (dolor al amamantar, infecciones, alimentación con bajo peso,
                  dificultades emocionales, etc.).
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Te acompaño paso a paso para que no te sientas sola y puedas
                  resolver lo que hoy te preocupa con seguridad y confianza.
                </p>
              </div>
            </section>

            {/* Important advice */}
            <section className="bg-pink-50 dark:bg-pink-900/30 rounded-lg shadow-md p-8 border-l-4 border-pink-500">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 dark:bg-pink-900/50 p-3 rounded-full mt-1">
                  <span className="text-pink-600 dark:text-pink-400 font-bold text-xl">
                    ⚠️
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-pink-700 dark:text-pink-300">
                    Un consejo importante:
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Muchas veces, las pacientes llegan cuando ya tienen grietas,
                    mastitis, congestión o mucho dolor.
                    <strong className="block mt-2">
                      No esperes a que duela para consultar.
                    </strong>
                    Cuanto antes podamos conversar, más fácil será prevenir
                    complicaciones, resolver dudas y transitar la etapa que
                    estés viviendo con más placer y confianza.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Agenda tu consulta</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Estoy para ayudarte a encontrar respuestas, alivio y
                  bienestar. Siempre desde el respeto, el cuidado y el amor por
                  tu maternidad.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Send className="h-4 w-4 mr-2" />
                    WhatsApp: 2475405535
                  </Button>
                  <Button variant="outline" className="w-full">
                    Instagram: @pueriycrianza
                  </Button>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">
                  Lo que dicen mis pacientes
                </h3>
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                      "Gracias a Meel pude superar mis dificultades con la
                      lactancia. Su acompañamiento fue fundamental para no
                      rendirme en los momentos difíciles."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      — Laura, mamá de Emma
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                      "La guía de Meel para iniciar la alimentación
                      complementaria me dio la seguridad que necesitaba. Su
                      enfoque respetuoso hace toda la diferencia."
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      — Carolina, mamá de Mateo
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Guides */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Conocé mis guías</h3>
                <div className="space-y-3">
                  {guides &&
                    guides.map((guide) => (
                      <Link
                        href={`/guias/${guide.slug}`}
                        key={guide.id}
                        className="block p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                      >
                        <h4 className="font-medium text-sm">{guide.title}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {guide.pages} páginas
                          </span>
                          <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                            ${guide.price}
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
