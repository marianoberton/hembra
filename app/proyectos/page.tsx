import Link from 'next/link';
import Image from 'next/image';
import { proyectos } from '../../data/proyectos';

export default function ProyectosPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FEFCFB'}}>
      <section className="pt-20">
        <div className="w-full px-2">
          {/* Fixed Height Grid Layout */}
          <div className="grid grid-cols-2 gap-2">
            
            {/* LEFT COLUMN - 4 cards of standard height */}
            <div className="space-y-2">
              {proyectos.slice(0, 4).map((proyecto) => (
                <Link 
                  key={proyecto.id}
                  href={`/proyectos/${proyecto.id}`}
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:scale-[1.01] hover:shadow-lg h-[28rem]">
                    <Image
                      src={proyecto.image}
                      alt={proyecto.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
                    
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30" style={{ 
                      fontFamily: '"Helvetica Neue LT Pro 55 Roman", sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#ffffff',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      Proyectos
                    </div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                      <h3 className="text-white text-3xl md:text-4xl font-light tracking-wide">
                        {proyecto.title}
                      </h3>
                    </div>
                    
                    <div className="absolute bottom-6 right-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* RIGHT COLUMN - 2 cards of standard height + 1 double height */}
            <div className="space-y-2">
              {/* First 2 cards - standard height */}
              {proyectos.slice(4, 6).map((proyecto) => (
                <Link 
                  key={proyecto.id}
                  href={`/proyectos/${proyecto.id}`}
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:scale-[1.01] hover:shadow-lg h-[28rem]">
                    <Image
                      src={proyecto.image}
                      alt={proyecto.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
                    
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30" style={{ 
                      fontFamily: '"Helvetica Neue LT Pro 55 Roman", sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#ffffff',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      Proyectos
                    </div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                      <h3 className="text-white text-3xl md:text-4xl font-light tracking-wide">
                        {proyecto.title}
                      </h3>
                    </div>
                    
                    <div className="absolute bottom-6 right-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Last card - double height */}
              {proyectos[6] && (
                <Link 
                  href={`/proyectos/${proyectos[6].id}`}
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:scale-[1.01] hover:shadow-lg h-[58rem]">
                    <Image
                      src={proyectos[6].image}
                      alt={proyectos[6].title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
                    
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30" style={{ 
                      fontFamily: '"Helvetica Neue LT Pro 55 Roman", sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#ffffff',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      Proyectos
                    </div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                      <h3 className="text-white text-4xl md:text-5xl font-light tracking-wide">
                        {proyectos[6].title}
                      </h3>
                    </div>
                    
                    <div className="absolute bottom-8 right-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 mb-16">
            <div className="inline-block">
              <div className="w-12 h-px bg-gray-300 mx-auto mb-6"></div>
              <h2 className="text-lg font-light tracking-wide" style={{color: '#1a1a1a'}}>
                Transformando residuos en soluciones sustentables
              </h2>
              <div className="mt-6">
                <Link 
                  href="/contacto"
                  className="inline-block text-xs uppercase tracking-wider px-6 py-3 border border-gray-300 hover:bg-gray-50 transition-colors duration-300"
                  style={{color: '#1a1a1a'}}
                >
                  Iniciar proyecto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 