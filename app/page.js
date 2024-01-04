"use client";
import Image from "next/image";
import { CardComponent } from "./components/Card";
import { SliderCards } from "./components/SliderCards";
import { SliderFlip } from "./components/SliderFlip";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const containerRef = useRef(null);
 const {push} = useRouter()
  useEffect(() => {
    const div3d = document.querySelector(".div-3d");

    // Temporizador para enderezar el div automáticamente
    setTimeout(() => {
      div3d.style.transform = "perspective(1000px) rotateX(0deg)";
    }, 500); // Ajusta este tiempo según necesites
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = containerRef.current.getElementsByClassName("card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col  justify-start items-center w-screen ">
        <div className="flex flex-col items-center mt-10 ">
          <div className="flex items-center flex-col">
            <p className="font-sans text-3xl md:text-5xl text-slate-200 ">
              Nicolas Sofia
            </p>

            <p className="font-sans text-md md:text-3xl text-slate-200 ml-2 ">
              Arte y Precisión en la Edición de Video
            </p>
          </div>
          <div className="w-screen  flex justify-center">
            <p className="text-slate-200 text-center  md:text-md text-xs my-10 w font-light mx-2 md:mx-0">
              LOS PEQUEÑOS DETALLES{" "}
              <span className="font-semibold">IMPORTAN</span>
            </p>
          </div>
          <div className="div-3d flex justify-center">
            <video
              src="/secuencia.webm"
              controls
              muted
              loop
              autoPlay
              className="my-5 rounded-xl"
              style={{ width: "80%" }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="md:grid md:grid-cols-3 flex w-screen  justify-center  md:w-fit "
            style={{ flexWrap: "wrap" }}
            ref={containerRef}
          >
            <CardComponent
              icon={
                <svg
                  fill="#ffffff"
                  height={50}
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>magic</title>
                    <path d="M9.5 9.625l-0.906 2.906-0.875-2.906-2.906-0.906 2.906-0.875 0.875-2.938 0.906 2.938 2.906 0.875zM14.563 8.031l-0.438 1.469-0.5-1.469-1.438-0.469 1.438-0.438 0.5-1.438 0.438 1.438 1.438 0.438zM0.281 24l17.906-17.375c0.125-0.156 0.313-0.25 0.531-0.25 0.281-0.031 0.563 0.063 0.781 0.281 0.094 0.063 0.219 0.188 0.406 0.344 0.344 0.313 0.719 0.688 1 1.063 0.125 0.188 0.188 0.344 0.188 0.5 0.031 0.313-0.063 0.594-0.25 0.781l-17.906 17.438c-0.156 0.156-0.344 0.219-0.563 0.25-0.281 0.031-0.563-0.063-0.781-0.281-0.094-0.094-0.219-0.188-0.406-0.375-0.344-0.281-0.719-0.656-0.969-1.063-0.125-0.188-0.188-0.375-0.219-0.531-0.031-0.313 0.063-0.563 0.281-0.781zM14.656 11.375l1.313 1.344 4.156-4.031-1.313-1.375zM5.938 13.156l-0.406 1.438-0.438-1.438-1.438-0.469 1.438-0.438 0.438-1.469 0.406 1.469 1.5 0.438zM20.5 12.063l0.469 1.469 1.438 0.438-1.438 0.469-0.469 1.438-0.469-1.438-1.438-0.469 1.438-0.438z"></path>
                  </g>
                </svg>
              }
              title={"Efectos Visuales Innovadores"}
              subtitle={"Integración de VFX para realzar la narrativa visual."}
            />
            <CardComponent
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={50}
                >
                  <g>
                    <path
                      fill="#f5f5f7"
                      d="M5.25 2.002c-1.397.01-2.162.081-2.664.584-.503.502-.574 1.267-.584 2.664H5.25V2.002zM2.002 6.75c.01 1.397.081 2.162.584 2.664.502.503 1.267.574 2.664.584V6.75H2.002zM6.75 10h3.5V2h-3.5v8zM11.75 2.002V5.25h3.248c-.01-1.397-.081-2.162-.584-2.664-.502-.503-1.267-.574-2.664-.584zM14.998 6.75H11.75v3.248c1.397-.01 2.162-.081 2.664-.584.503-.502.574-1.267.584-2.664z"
                    ></path>
                    <path
                      fill="#f5f5f7"
                      fillRule="evenodd"
                      d="M2.47 12.47a.75.75 0 011.06 0l1 1a.75.75 0 01-.778 1.238c.002.288.007.584.017.86.009.256.022.484.041.663a2.406 2.406 0 00.035.247c.127.307.37.55.677.677.077.032.194.061.435.078.247.017.567.017 1.043.017a.75.75 0 010 1.5h-.025c-.445 0-.816 0-1.12-.02a2.822 2.822 0 01-.907-.19 2.75 2.75 0 01-1.489-1.488c-.084-.203-.12-.464-.14-.664a11.568 11.568 0 01-.05-.767c-.01-.296-.015-.613-.017-.914a.75.75 0 01-.782-1.237l1-1z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#f5f5f7"
                      d="M19.043 6.767A17.091 17.091 0 0018 6.75a.75.75 0 010-1.5h.025c.445 0 .816 0 1.12.02.317.022.617.07.907.19a2.75 2.75 0 011.489 1.488c.084.204.12.464.14.664.025.229.04.495.05.767.01.296.015.613.017.914a.75.75 0 01.782 1.237l-1 1a.75.75 0 01-1.06 0l-1-1a.75.75 0 01.778-1.238 30.628 30.628 0 00-.017-.86 10.19 10.19 0 00-.041-.663c-.015-.142-.03-.215-.035-.24-.002-.012-.003-.014 0-.007a1.25 1.25 0 00-.677-.677c-.077-.032-.194-.061-.435-.078z"
                      opacity="0.5"
                    ></path>
                    <g fill="#f5f5f7" opacity="0.5">
                      <path d="M12.75 14.01c-1.086.027-1.725.137-2.164.576-.502.502-.574 1.267-.584 2.664h2.748v-3.24zM10.002 18.75c.01 1.397.082 2.162.584 2.664.439.44 1.078.55 2.164.577V18.75h-2.748zM14.25 22h2.5v-8h-2.5v8zM18.25 14.01v3.24H21c-.01-1.397-.082-2.162-.584-2.664-.44-.44-1.079-.55-2.165-.577zM20.999 18.75H18.25v3.24c1.086-.027 1.726-.137 2.165-.576.502-.502.573-1.267.584-2.664z"></path>
                    </g>
                  </g>
                </svg>
              }
              title={"Adaptabilidad en Estilos de Edición"}
              subtitle={
                "Capacidad para trabajar en diversos géneros y formatos."
              }
            />
            <CardComponent
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#f5f5f7"
                  height={70}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M22 8h-2m0 0h-1c-2-1.998-5-4-7-2m8 2v8M12 6L9 9.002c-.08.079-.12.119-.151.154a2 2 0 000 2.691c.032.035.072.075.151.154.08.08.12.12.154.151a2 2 0 002.691 0c.035-.032.075-.072.154-.151l1-1M12 6c-2-2-5 .002-7 2H4M2 8h2m0 0v8m16 0v3h2m-2-3h-2.828M15 13l1.5 1.5c.08.08.12.12.151.155a2 2 0 010 2.69c-.032.036-.071.075-.151.155s-.12.12-.155.151a2 2 0 01-2.69 0 5.21 5.21 0 01-.155-.151L13 17c-.545.545-.818.818-1.112.964a2 2 0 01-1.776 0C9.818 17.818 9.545 17.545 9 17a1.545 1.545 0 01-2.618-.236L6 16H4m0 0v3H2"
                  ></path>
                </svg>
              }
              title={"Compromiso y Puntualidad"}
              subtitle={
                "Entrega de proyectos de alta calidad en los plazos acordados."
              }
            />
          </div>
        </div>
        <div className="my-10   w-screen flex md:grid md:grid-cols-3 flex-col justify-center items-center max-w-screen  ">
          <SliderFlip />
          <div className="md:mt-10 mt-20">
            <div className=" flex  flex-col items-center justify-center">
              <p className="text-center text-2xl font-sans text-slate-200 font-bold mb-10  ">
                Timeline de Trabajo
              </p>
              <div className=" w-6/12">
                <ol class="relative border-s  border-gray-700">
                  <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                      <svg
                        class="w-2.5 h-2.5  text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                      Consulta Inicial
                    </h3>

                    <p class="mb-4 text-base font-normal text-gray-400">
                      Reunión inicial con el cliente para discutir objetivos y
                      expectativas.
                    </p>
                  </li>

                  <li class="ms-6 mb-10">
                    <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                      <svg
                        class="w-2.5 h-2.5 text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-white">
                      Diseño y Desarrollo
                    </h3>

                    <p class="text-base font-normal text-gray-400">
                      Comienzo del diseño y desarrollo del proyecto según los
                      requisitos acordados.
                    </p>
                  </li>
                  <li class="ms-6 mb-10">
                    <span class="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                      <svg
                        class="w-2.5 h-2.5 text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-white">
                      Ajustes y Mejoras
                    </h3>

                    <p class="text-base font-normal text-gray-400">
                      Realización de ajustes basados en el feedback del cliente.
                    </p>
                  </li>
                  <li class="ms-6 mb-10">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue- rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                      <svg
                        class="w-2.5 h-2.5 text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-white">
                      Entrega Final
                    </h3>

                    <p class="text-base font-normal text-gray-400">
                      Entrega del producto final
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <SliderCards />
        </div>
        <div className=" w-screen flex flex-col justify-center items-center">
          <p className="text-2xl md:text-4xl text-slate-200  text-center ">
            ¿Listo para Llevar Tu Proyecto al Siguiente Nivel?
          </p>
          <p className="mt-5 text-md text-slate-200 font-light md:text-xl text-center">
            {" "}
            Agenda una Llamada Consultiva Gratuita Hoy Mismo{" "}
          </p>
        </div>
        <div className="mb-10  flex justify-center flex-col text-center w-screen  ">
          <div className="flex justify-center mt-10">
            <button class="animated-button" onClick={()=> push('https://wa.link/szblyc')}>
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="text">Agendar llamada</span>

              <span class="circle"></span>
              <svg
                viewBox="0 0 24 24"
                class="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </>
  );
}
