import Link from 'next/link';
import Image from 'next/image';

export default function StudioPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#e9f5db'}}>
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-display mb-8" style={{color: '#718355'}}>
              STUDIO
            </h1>
            <p className="text-headline max-w-3xl" style={{color: '#7c8e60'}}>
              Hembra es un estudio/ taller de diseño industrial ubicado en el barrio de Villa Crespo, CABA.
            </p>
          </div>
          
          {/* Studio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Ornella & Studio Hero */}
            <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center" style={{backgroundColor: '#b3c1a2'}}>
              <h2 className="text-headline mb-6" style={{color: '#fefcfb'}}>
                Ornella Casoy
              </h2>
              <div className="space-y-4 text-lg" style={{color: '#fefcfb'}}>
                <p>
                  Fundado y actualmente dirigido por la diseñadora industrial Ornella Casoy en Villa Crespo, Buenos Aires.
                </p>
                <p>
                  Apostamos a una industria cada vez más sustentable, a través del uso consciente de los recursos y la integración social.
                </p>
              </div>
            </div>
            
            {/* Studio Image */}
            <div className="md:col-span-4 relative min-h-[400px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/1work.avif"
                alt="Taller Hembra - Villa Crespo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-body font-medium">Taller en Villa Crespo</h3>
              </div>
            </div>
            
            {/* Values Section */}
            <div className="md:col-span-4 p-8 rounded-2xl" style={{backgroundColor: '#fefcfb'}}>
              <h3 className="text-headline mb-4" style={{color: '#718355'}}>
                Nuestros Valores
              </h3>
              <div className="space-y-3 text-body" style={{color: '#7c8e60'}}>
                <p>• Diseño sustentable</p>
                <p>• Integración social</p>
                <p>• Valores humanos</p>
                <p>• Trabajo artesanal</p>
                <p>• Diseño de autor</p>
              </div>
            </div>
            
            {/* Process Image */}
            <div className="md:col-span-4 relative min-h-[300px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/2work.avif"
                alt="Proceso de Diseño - Hembra"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Proceso de Diseño</h3>
              </div>
            </div>
            
            {/* Mission */}
            <div className="md:col-span-4 p-8 rounded-2xl" style={{backgroundColor: '#cedbbf'}}>
              <h3 className="text-headline mb-4" style={{color: '#718355'}}>
                Nuestra Misión
              </h3>
              <p className="text-body" style={{color: '#7c8e60'}}>
                Creamos productos de triple impacto que se destacan por sus diseños, sosteniendo valores humanos y artesanales.
              </p>
            </div>
            
            {/* Network Section */}
            <div className="md:col-span-8 p-8 rounded-2xl" style={{backgroundColor: '#a8836d'}}>
              <h3 className="text-headline mb-4" style={{color: '#fefcfb'}}>
                Red de Trabajo Consciente
              </h3>
              <p className="text-body mb-4" style={{color: '#fefcfb'}}>
                Nuestro objetivo es generar una cadena de actores comprometidos y trabajar conjuntamente para promover el consumo responsable.
              </p>
              <p className="text-body" style={{color: '#fefcfb'}}>
                Trabajamos junto con cooperativas y pequeños talleristas del AMBA generando una red de trabajo consciente.
              </p>
            </div>
            
            {/* Upcycling Image */}
            <div className="md:col-span-4 relative min-h-[300px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/3work.avif"
                alt="Upcycling - Materiales Recuperados"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Upcycling</h3>
              </div>
            </div>
            
            {/* Objects Section */}
            <div className="md:col-span-12 py-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl" style={{backgroundColor: '#909b82'}}>
                  <h3 className="text-headline mb-4" style={{color: '#fefcfb'}}>
                    Objetos Responsables
                  </h3>
                  <p className="text-body" style={{color: '#fefcfb'}}>
                    Todos nuestros productos están elaborados artesanalmente uno por uno y gran parte de los materiales que utilizamos son recuperados.
                  </p>
                </div>
                
                <div className="p-8 rounded-2xl text-center" style={{backgroundColor: '#ae8b77'}}>
                  <p className="text-xl mb-4" style={{color: '#fefcfb'}}>
                    ¡Muchas gracias por leernos!
                  </p>
                  <p className="text-2xl font-semibold" style={{color: '#fefcfb'}}>
                    Taller HEMBRA
                  </p>
                  <div className="mt-6">
                    <Link 
                      href="/work" 
                      className="inline-block px-6 py-3 rounded-lg font-medium transition-colors"
                      style={{backgroundColor: '#fefcfb', color: '#ae8b77'}}
                    >
                      Ver Nuestro Proceso →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
} 