import React from "react";

export const TimeLine = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 my-4">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Estimulación temprana
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Fundación Latinoamericana para la enseñanza y estudio de la diversidad
          y transtornos en la niñez
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Especialización en crianza respetuosa con enfoque Montessori
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Escuela NANAI
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Formación profesional en alimentación complementaria y Baby Led
          Weaning
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Escuela Argentina de Baby Led Weaning
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Formación en Doula
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Espacio Inalbis
        </p>
      </li>
      <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Formación en Puericultura
        </h3>
        <a
          className="text-gray-500 dark:text-gray-400"
          href="https://www.acadp.org.ar/"
        >
          Asociación Civil Argentina de Puericultura
        </a>
      </li>
    </ol>
  );
};
