export const menuItems = [
  { path: "/", name: "Inicio" },
  { path: "/sobre-mi", name: "Acerca de mi" }
  // { path: "/taller", name: "Taller" },
  // { path: "/mis-redes", name: "Mis Redes" }
];

export const guides = [
  {
    id: 1,
    title: "Guía Completa de Alimentación complementaria",
    description:
      "Esta guía fue creada con el objetivo de acompañar a las familias en el inicio de la alimentación complementaria.",

    longDescription:
      "Aprende todo lo necesario para iniciar la alimentación complementaria de tu bebé de manera segura y nutritiva. Esta guía te acompaña paso a paso en este importante proceso.",
    pages: 22,
    icon: "📚",
    slug: "guia-completa-alimentacion-complementaria",
    price: 1,
    color: "pink",
    gradient: "bg-gradient-to-r from-pink-500 to-purple-500",
    bg: "bg-pink-500",
    chapters: [
      { title: "Introducción a la alimentación complementaria", pages: 3 },
      { title: "¿Cuándo comenzar?", pages: 2 },
      { title: "Primeros alimentos recomendados", pages: 4 },
      { title: "Texturas y consistencias", pages: 3 },
      { title: "Alimentos potencialmente alérgenos", pages: 2 },
      { title: "Recetas para comenzar", pages: 5 },
      { title: "Preguntas frecuentes", pages: 3 }
    ]
  }
];
