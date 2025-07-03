import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#e9f5db'}}>
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-display mb-8" style={{color: '#718355'}}>
              NEWS
            </h1>
            <p className="text-headline max-w-3xl" style={{color: '#7c8e60'}}>
              Novedades, proyectos especiales y eventos del universo Hembra. 
              Mantente al día con nuestras últimas creaciones y colaboraciones.
            </p>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Featured News */}
            <div className="md:col-span-8 relative min-h-[400px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/21work.avif"
                alt="Últimas Creaciones Hembra"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#718355', color: '#fefcfb'}}>
                    DESTACADO
                  </span>
                </div>
                <h2 className="text-headline mb-4 text-white">
                  Nueva Colección Primavera 2024
                </h2>
                <p className="text-lg text-white/90 mb-4">
                  Presentamos nuestras últimas creaciones inspiradas en la renovación primaveral, 
                  con nuevos diseños que celebran el renacimiento de la naturaleza.
                </p>
                <p className="text-caption text-white/70">
                  Marzo 2024
                </p>
              </div>
            </div>
            
            {/* Quick News */}
            <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-center" style={{backgroundColor: '#fefcfb'}}>
              <h3 className="text-headline mb-4" style={{color: '#718355'}}>
                Noticias Recientes
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{borderColor: '#cedbbf'}}>
                  <h4 className="text-body font-medium mb-2" style={{color: '#7c8e60'}}>
                    Colaboración con Biome Futures
                  </h4>
                  <p className="text-caption" style={{color: '#a8836d'}}>
                    Febrero 2024
                  </p>
                </div>
                <div className="pb-4 border-b" style={{borderColor: '#cedbbf'}}>
                  <h4 className="text-body font-medium mb-2" style={{color: '#7c8e60'}}>
                    Workshop de Upcycling
                  </h4>
                  <p className="text-caption" style={{color: '#a8836d'}}>
                    Enero 2024
                  </p>
                </div>
                <div>
                  <h4 className="text-body font-medium mb-2" style={{color: '#7c8e60'}}>
                    Expansión Red de Cooperativas
                  </h4>
                  <p className="text-caption" style={{color: '#a8836d'}}>
                    Diciembre 2023
                  </p>
                </div>
              </div>
            </div>
            
            {/* Workshop News */}
            <div className="md:col-span-6 p-8 rounded-2xl" style={{backgroundColor: '#cedbbf'}}>
              <h3 className="text-headline mb-4" style={{color: '#718355'}}>
                Próximo Workshop
              </h3>
              <div className="space-y-4 text-body" style={{color: '#7c8e60'}}>
                <p>
                  <strong>Introducción al Upcycling</strong>
                </p>
                <p>
                  Aprende los fundamentos del supra-reciclaje y cómo transformar materiales en desuso en objetos de valor.
                </p>
                <div className="flex items-center space-x-4 text-caption" style={{color: '#a8836d'}}>
                  <span>📅 15 de Abril</span>
                  <span>📍 Villa Crespo</span>
                  <span>⏰ 14:00-18:00</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-6 relative min-h-[300px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/23work.avif"
                alt="Workshop Upcycling"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Hands-on Workshop</h3>
              </div>
            </div>
            
            {/* Sustainability Focus */}
            <div className="md:col-span-4 relative min-h-[280px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/27work.avif"
                alt="Sustentabilidad en el Diseño"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Diseño Sustentable</h3>
              </div>
            </div>
            
            <div className="md:col-span-8 p-8 rounded-2xl" style={{backgroundColor: '#a8836d'}}>
              <h3 className="text-headline mb-4" style={{color: '#fefcfb'}}>
                Impacto Ambiental 2023
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2" style={{color: '#fefcfb'}}>
                    2.3 TON
                  </div>
                  <p className="text-caption" style={{color: '#cedbbf'}}>
                    Materiales recuperados
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2" style={{color: '#fefcfb'}}>
                    150+
                  </div>
                  <p className="text-caption" style={{color: '#cedbbf'}}>
                    Objetos creados
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2" style={{color: '#fefcfb'}}>
                    12
                  </div>
                  <p className="text-caption" style={{color: '#cedbbf'}}>
                    Cooperativas aliadas
                  </p>
                </div>
              </div>
              <p className="text-body" style={{color: '#fefcfb'}}>
                En 2023 logramos nuestro mayor impacto positivo hasta la fecha, 
                fortaleciendo nuestra red de trabajo consciente y expandiendo el alcance 
                de nuestras prácticas sustentables.
              </p>
            </div>
            
            {/* Awards & Recognition */}
            <div className="md:col-span-6 p-8 rounded-2xl" style={{backgroundColor: '#b3c1a2'}}>
              <h3 className="text-headline mb-4" style={{color: '#fefcfb'}}>
                Reconocimientos
              </h3>
              <div className="space-y-4 text-body" style={{color: '#fefcfb'}}>
                <div>
                  <h4 className="font-semibold mb-1">Premio Diseño Sustentable 2023</h4>
                  <p className="text-caption" style={{color: '#e9f5db'}}>
                    Cámara Argentina de Diseño Industrial
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Mención Especial Upcycling</h4>
                  <p className="text-caption" style={{color: '#e9f5db'}}>
                    Feria Internacional de Diseño
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-6 relative min-h-[280px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/30work.avif"
                alt="Reconocimientos Hembra"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Awards 2023</h3>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="md:col-span-12 text-center">
              <div className="rounded-2xl p-8 md:p-12" style={{backgroundColor: '#909b82'}}>
                <h3 className="text-headline mb-4" style={{color: '#fefcfb'}}>
                  Mantente Conectado
                </h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto" style={{color: '#fefcfb'}}>
                  Suscríbete a nuestro newsletter para recibir las últimas noticias, 
                  proyectos especiales y eventos del mundo Hembra.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-3 rounded-lg text-body"
                    style={{backgroundColor: '#fefcfb', color: '#7c8e60'}}
                  />
                  <button 
                    className="px-6 py-3 rounded-lg font-medium transition-colors"
                    style={{backgroundColor: '#718355', color: '#fefcfb'}}
                  >
                    Suscribirse →
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
} 