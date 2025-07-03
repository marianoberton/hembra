import Link from 'next/link';
import Image from 'next/image';

export default function WorkPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#e9f5db'}}>
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-display mb-8" style={{color: '#718355'}}>
              WORK
            </h1>
            <p className="text-headline max-w-3xl" style={{color: '#7c8e60'}}>
              Conocé nuestro proceso de upcycling y la red de trabajo consciente que hemos construido.
            </p>
          </div>
          
          {/* Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Upcycling Hero */}
            <div className="md:col-span-8 relative min-h-[400px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/1work.avif"
                alt="Upcycling - Proceso Sustentable"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-headline mb-6 text-white">
                  Upcycling & Sustentabilidad
                </h2>
                <div className="space-y-4 text-lg text-white">
                  <p>
                    <strong>En la Argentina se generan más de 18 millones de toneladas de basura por año.</strong>
                  </p>
                  <p>
                    Desde Hembra creamos nuestros objetos con la intención de generar impacto positivo en el medio ambiente.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Upcycling Concept */}
            <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-center" style={{backgroundColor: '#fefcfb'}}>
              <h3 className="text-headline mb-4" style={{color: '#718355'}}>
                UPCYCLING
              </h3>
              <p className="text-body mb-6" style={{color: '#7c8e60'}}>
                Tomamos el concepto de <strong>UPCYCLING</strong> como punto de partida a la hora de pensar nuestros objetos.
              </p>
              <div className="space-y-2 text-caption" style={{color: '#a8836d'}}>
                <p>Proceso: Supra-reciclaje</p>
                <p>Impacto: Positivo</p>
                <p>Materiales: Recuperados</p>
              </div>
            </div>
            
            {/* Process Images */}
            <div className="md:col-span-4 relative min-h-[300px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/2work.avif"
                alt="Materiales Recuperados"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Materiales Recuperados</h3>
              </div>
            </div>
            
            <div className="md:col-span-4 relative min-h-[300px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/3work.avif"
                alt="Proceso Artesanal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Proceso Artesanal</h3>
              </div>
            </div>
            
            <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-center" style={{backgroundColor: '#cedbbf'}}>
              <h3 className="text-headline mb-4" style={{color: '#718355'}}>
                Supra-reciclaje
              </h3>
              <p className="text-body" style={{color: '#7c8e60'}}>
                Les damos una segunda vida a los productos y materiales en desuso, evitando el reproceso y reduciendo el impacto ambiental.
              </p>
            </div>
            
            {/* Red de Trabajo Section */}
            <div className="md:col-span-12 py-12">
              <h2 className="text-headline mb-8 text-center" style={{color: '#718355'}}>
                RED DE TRABAJO
              </h2>
              <p className="text-lg text-center mb-8" style={{color: '#7c8e60'}}>
                Trabajamos con talleristas y cooperativas del conurbano, generando una red de trabajo en conjunto.
              </p>
            </div>
            
            {/* Cooperativa Super Crea with Image */}
            <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center" style={{backgroundColor: '#a8836d'}}>
              <h3 className="text-headline mb-4" style={{color: '#fefcfb'}}>
                Cooperativa "Super Crea"
              </h3>
              <div className="space-y-4 text-body" style={{color: '#fefcfb'}}>
                <p>
                  La cooperativa "Super Crea", ubicada en la localidad de Quilmes, nos provee de envases de vidrio recuperados y transformados.
                </p>
                <p>
                  Esta conformada por un grupo de personas en situación de vulnerabilidad psicosocial y económica comprometidas con el medioambiente, la discapacidad y la salud mental.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-4 relative min-h-[300px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/5work.avif"
                alt="Cooperativa Super Crea - Quilmes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Super Crea - Quilmes</h3>
              </div>
            </div>
            
            {/* Repusaje Section */}
            <div className="md:col-span-4 relative min-h-[300px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/7work.avif"
                alt="Repusaje - Villa Bosch"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Repusaje - Villa Bosch</h3>
              </div>
            </div>
            
            <div className="md:col-span-8 p-8 rounded-2xl" style={{backgroundColor: '#b3c1a2'}}>
              <h3 className="text-headline mb-4" style={{color: '#fefcfb'}}>
                Repusaje (Torneado de Metales)
              </h3>
              <div className="space-y-4 text-body" style={{color: '#fefcfb'}}>
                <p>
                  El repusaje (torneado de metales) es uno de los principales procesos con los que trabajamos para conformar nuestras piezas. Nuestro tallerista principal se encuentra en el barrio de Villa Bosch.
                </p>
                <p>
                  El repusaje consiste en un trabajo artesanal con piezas de revolución que se conforman con la ayuda de una herramienta o rodillo a partir de las matrices correspondientes.
                </p>
                <p>
                  Reutilizamos matrices en desuso, resignificando las mismas y dándoles nuevas oportunidades de uso. Gran parte de la chapa que utilizamos es recuperada de chatarreras.
                </p>
              </div>
            </div>
            
            {/* Process Showcase */}
            <div className="md:col-span-12 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-xl" style={{backgroundColor: '#cedbbf'}}>
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#718355'}}>
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="text-body font-medium mb-2" style={{color: '#718355'}}>Recuperación</h4>
                  <p className="text-caption" style={{color: '#7c8e60'}}>
                    Selección de materiales en desuso
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl" style={{backgroundColor: '#fefcfb'}}>
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#a8836d'}}>
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="text-body font-medium mb-2" style={{color: '#718355'}}>Resignificación</h4>
                  <p className="text-caption" style={{color: '#7c8e60'}}>
                    Diseño de nueva función y forma
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl" style={{backgroundColor: '#cedbbf'}}>
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#718355'}}>
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="text-body font-medium mb-2" style={{color: '#718355'}}>Transformación</h4>
                  <p className="text-caption" style={{color: '#7c8e60'}}>
                    Proceso artesanal colaborativo
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl" style={{backgroundColor: '#fefcfb'}}>
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#a8836d'}}>
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h4 className="text-body font-medium mb-2" style={{color: '#718355'}}>Objeto Responsable</h4>
                  <p className="text-caption" style={{color: '#7c8e60'}}>
                    Producto final con impacto positivo
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mission Statement */}
            <div className="md:col-span-12 text-center">
              <div className="rounded-2xl p-8 md:p-12" style={{backgroundColor: '#909b82'}}>
                <h2 className="text-headline mb-6" style={{color: '#fefcfb'}}>
                  Nuestro Objetivo
                </h2>
                <p className="text-xl max-w-2xl mx-auto mb-6" style={{color: '#fefcfb'}}>
                  Generar más trabajo con el menor consumo de recursos posible.
                </p>
                <Link 
                  href="/studio" 
                  className="inline-block px-6 py-3 rounded-lg font-medium transition-colors"
                  style={{backgroundColor: '#fefcfb', color: '#909b82'}}
                >
                  Conocé Más Sobre Nosotros →
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
} 