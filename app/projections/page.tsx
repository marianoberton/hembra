import Image from 'next/image';
import Link from 'next/link';

export default function ProjectionsPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#e9f5db'}}>
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-display mb-8" style={{color: '#718355'}}>
              PROJECTIONS
            </h1>
            <p className="text-headline max-w-3xl" style={{color: '#7c8e60'}}>
              Ubicados en Villa Crespo, trabajamos en colaboración con cooperativas y talleristas del AMBA.
            </p>
          </div>
          
          {/* Projections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Hero Contact */}
            <div className="md:col-span-8 relative min-h-[400px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/10work.avif"
                alt="Taller Hembra - Villa Crespo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-headline mb-6 text-white">
                  Taller en Villa Crespo
                </h2>
                <div className="space-y-4 text-lg text-white">
                  <p>
                    <strong>Un espacio de creación donde nacen objetos responsables</strong>
                  </p>
                  <p>
                    Ubicado en el barrio de Villa Crespo, nuestro taller es el corazón del proceso creativo de Hembra.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Info Quick */}
            <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-center" style={{backgroundColor: '#fefcfb'}}>
              <h3 className="text-headline mb-4" style={{color: '#718355'}}>
                Contacto
              </h3>
              <div className="space-y-3 text-body" style={{color: '#7c8e60'}}>
                <p><strong>Email:</strong><br/>hola@hembra.com.ar</p>
                <p><strong>Instagram:</strong><br/>@taller.hembra</p>
                <p><strong>Ubicación:</strong><br/>Villa Crespo, CABA</p>
              </div>
            </div>
            
            {/* Team Section */}
            <div className="md:col-span-6 p-8 rounded-2xl" style={{backgroundColor: '#cedbbf'}}>
              <h3 className="text-headline mb-4" style={{color: '#718355'}}>
                Ornella Casoy
              </h3>
              <div className="space-y-4 text-body" style={{color: '#7c8e60'}}>
                <p>
                  <strong>Diseñadora Industrial</strong>
                </p>
                <p>
                  Fundadora y directora creativa de Hembra. Especializada en diseño sustentable y procesos de upcycling.
                </p>
                <p>
                  Con una visión enfocada en el triple impacto: económico, social y ambiental.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-6 relative min-h-[300px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/11work.avif"
                alt="Ornella Casoy - Diseñadora Industrial"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Diseño Industrial</h3>
              </div>
            </div>
            
            {/* Work Schedule */}
            <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-center" style={{backgroundColor: '#b3c1a2'}}>
              <h3 className="text-headline mb-4" style={{color: '#fefcfb'}}>
                Horarios de Taller
              </h3>
              <div className="space-y-3 text-body" style={{color: '#fefcfb'}}>
                <p><strong>Lunes a Viernes</strong></p>
                <p>10:00 - 18:00 hs</p>
                <p className="text-caption">
                  *Visitas con cita previa
                </p>
              </div>
            </div>
            
            {/* Location Images */}
            <div className="md:col-span-4 relative min-h-[280px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/16work.avif"
                alt="Villa Crespo - Buenos Aires"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Villa Crespo</h3>
              </div>
            </div>
            
            <div className="md:col-span-4 relative min-h-[280px] overflow-hidden group rounded-2xl">
              <Image
                src="/images/19work.avif"
                alt="Proceso Creativo en el Taller"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Proceso Creativo</h3>
              </div>
            </div>
            
            {/* Collaboration Call */}
            <div className="md:col-span-12 py-8">
              <div className="text-center">
                <div className="rounded-2xl p-8 md:p-12" style={{backgroundColor: '#a8836d'}}>
                  <h2 className="text-headline mb-6" style={{color: '#fefcfb'}}>
                    Trabajemos Juntos
                  </h2>
                  <p className="text-lg max-w-3xl mx-auto mb-6" style={{color: '#fefcfb'}}>
                    Estamos siempre buscando nuevas oportunidades de colaboración con cooperativas, 
                    talleristas y personas comprometidas con el diseño sustentable.
                  </p>
                  <p className="text-body max-w-2xl mx-auto" style={{color: '#fefcfb'}}>
                    ¡No dudes en contactarnos para explorar cómo podemos trabajar juntos!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Values Grid */}
            <div className="md:col-span-4 text-center p-6 rounded-xl" style={{backgroundColor: '#909b82'}}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#fefcfb'}}>
                <span className="text-2xl" style={{color: '#909b82'}}>🌱</span>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color: '#fefcfb'}}>
                Diseño Responsable
              </h3>
              <p className="text-sm" style={{color: '#fefcfb'}}>
                Objetos pensados para generar impacto positivo en el medio ambiente
              </p>
            </div>
            
            <div className="md:col-span-4 text-center p-6 rounded-xl" style={{backgroundColor: '#ae8b77'}}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#fefcfb'}}>
                <span className="text-2xl" style={{color: '#ae8b77'}}>🤝</span>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color: '#fefcfb'}}>
                Trabajo Consciente
              </h3>
              <p className="text-sm" style={{color: '#fefcfb'}}>
                Red de colaboración con cooperativas y talleristas del AMBA
              </p>
            </div>
            
            <div className="md:col-span-4 text-center p-6 rounded-xl" style={{backgroundColor: '#718355'}}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#fefcfb'}}>
                <span className="text-2xl" style={{color: '#718355'}}>♻️</span>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color: '#fefcfb'}}>
                Upcycling
              </h3>
              <p className="text-sm" style={{color: '#fefcfb'}}>
                Segunda vida a materiales en desuso, evitando el reproceso
              </p>
            </div>
            
            {/* Network Showcase */}
            <div className="md:col-span-12 py-8">
              <h3 className="text-headline mb-8 text-center" style={{color: '#718355'}}>
                Red de Colaboradores
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl text-center" style={{backgroundColor: '#fefcfb'}}>
                  <h4 className="text-body font-medium mb-2" style={{color: '#718355'}}>
                    Cooperativa "Super Crea"
                  </h4>
                  <p className="text-caption mb-2" style={{color: '#7c8e60'}}>
                    Quilmes, Buenos Aires
                  </p>
                  <p className="text-caption" style={{color: '#a8836d'}}>
                    Envases de vidrio recuperados
                  </p>
                </div>
                
                <div className="p-6 rounded-xl text-center" style={{backgroundColor: '#cedbbf'}}>
                  <h4 className="text-body font-medium mb-2" style={{color: '#718355'}}>
                    Taller de Repusaje
                  </h4>
                  <p className="text-caption mb-2" style={{color: '#7c8e60'}}>
                    Villa Bosch, Buenos Aires
                  </p>
                  <p className="text-caption" style={{color: '#a8836d'}}>
                    Torneado de metales artesanal
                  </p>
                </div>
                
                <div className="p-6 rounded-xl text-center" style={{backgroundColor: '#fefcfb'}}>
                  <h4 className="text-body font-medium mb-2" style={{color: '#718355'}}>
                    Red de Talleristas
                  </h4>
                  <p className="text-caption mb-2" style={{color: '#7c8e60'}}>
                    AMBA, Argentina
                  </p>
                  <p className="text-caption" style={{color: '#a8836d'}}>
                    Procesos especializados
                  </p>
                </div>
              </div>
            </div>
            
            {/* Final CTA */}
            <div className="md:col-span-12 text-center">
              <div className="rounded-2xl p-8 md:p-12" style={{backgroundColor: '#b99b89'}}>
                <h3 className="text-headline mb-4" style={{color: '#fefcfb'}}>
                  ¿Tenés una idea o proyecto en mente?
                </h3>
                <p className="text-lg mb-6" style={{color: '#fefcfb'}}>
                  Escribinos y conversemos sobre cómo podemos colaborar para crear objetos responsables juntos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:hola@hembra.com.ar"
                    className="inline-block px-6 py-3 rounded-lg font-medium transition-colors"
                    style={{backgroundColor: '#fefcfb', color: '#b99b89'}}
                  >
                    Escribir Email →
                  </a>
                  <Link 
                    href="/studio" 
                    className="inline-block px-6 py-3 rounded-lg font-medium border transition-colors"
                    style={{borderColor: '#fefcfb', color: '#fefcfb'}}
                  >
                    Conocé Más →
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
} 