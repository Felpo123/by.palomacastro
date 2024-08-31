"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CodeIcon,
  PaletteIcon,
  PenToolIcon,
  GlobeIcon,
  InstagramIcon,
  PhoneIcon,
  Eye,
  WandSparkles,
  Sparkles,
  Handshake,
} from "lucide-react";
import { useRef } from "react";

export function ExtendedPortfolioWithServices() {
  const worksSectionRef = useRef<HTMLElement>(null);

  const scrollToWorks = () => {
    worksSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 text-gray-800">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col items-center justify-center space-y-8 text-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-300 shadow-2xl">
          <img
            src="/profile-photo.jpg"
            alt="Paloma Castro"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800">
          Paloma Castro
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-purple-600">
          Lash Lifting | Cosmetologa 🌼 | Temuco 🇨🇱
        </p>
        <Button
          size="lg"
          className="bg-purple-600 text-white hover:bg-purple-700"
          onClick={scrollToWorks}
        >
          Explora mis trabajos
        </Button>
      </header>

      {/* About Me Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">
            ✨ Sobre Mi ✨
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              ¡Hola! 🙋🏻‍♀️ Soy <strong>Paloma</strong>, una cosmetóloga dedicada a
              transformar y realzar la belleza natural de tus pestañas con la
              técnica de <strong>Lash Lifting</strong>. Ubicada en{" "}
              <strong>Hochstetter 560, Temuco</strong>, ofrezco un servicio
              personalizado de alta calidad en un ambiente acogedor y
              profesional. <strong>Agenda Abierta 💖</strong> - Reserva tu cita
              y deja que tu mirada hable por ti.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/by.palomacastro/"
                className="text-purple-600 hover:text-purple-800"
                aria-label="Instagram"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=56954827084"
                className="text-purple-600 hover:text-purple-800"
                aria-label="WhatsApp"
              >
                <PhoneIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">
            📍 Mis Servicios 📍
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Eye size={40} />,
                title: "Lifting de Pestañas Básico",
                description:
                  "Con esta tecnica lograras unas pestañas levantadas y definidas que enmarcaran tu mirada.",
              },
              {
                icon: <WandSparkles size={40} />,
                title: "Lifting de Pestañas Nutritivo",
                description:
                  "Ademas de levantar tus pestañas, con este servicio se nutren internamente estimulando el foliculo dando mayor textura, firmeza y devolviendo el brillo natural a las pestañas.",
              },
              {
                icon: <Sparkles size={40} />,
                title: "Reversa",
                description:
                  "Corrección de un mal procedimiento de lifting en cuento a una curva excesiva o mal dirección ademas de aportar nutricion. Previo a evaluacion del estado de las pestañas. ",
              },
              {
                icon: <Handshake size={40} />,
                title: "Retiro de extensiones",
                description:
                  "Retiro seguro de extensiones. Si quieres realizarte lifting el retiro debe ser almenos 3 dias antes.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent>
                  <div className="text-purple-600 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-purple-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Works Section */}
      <section ref={worksSectionRef} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">
            🌼 Mis Trabajos 🌼
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/work 1.jpg",
                title: "Project 1",
              },
              {
                img: "/work 2.jpg",
                title: "Project 2",
              },
              {
                img: "/work 3.jpg",
                title: "Project 3",
              },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden shadow-lg">
                <img
                  src={item.img}
                  alt={`Project ${item.title}`}
                  className="w-full h-96 object-cover"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
