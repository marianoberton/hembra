import Link from 'next/link';
import Image from 'next/image';
import { proyectos } from '../../data/proyectos';
import Footer from '../components/Footer';

export default function ProyectosPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e6e6e1' }}>
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="w-full px-2 sm:px-4 lg:px-6 pb-12">
          
          {/* Mobile: Single column stack */}
          <div className="block lg:hidden space-y-3 sm:space-y-4">
            {proyectos.map((proyecto) => (
              <Link 
                key={proyecto.id}
                href={`/proyectos/${proyecto.id}`}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white transition-all duration-500 hover:scale-[1.01] hover:shadow-lg h-80 sm:h-96">
                  <Image
                    src={proyecto.image}
                    alt={proyecto.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  
                  {/* Label - White by default, white on hover */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30 transition-colors duration-500 prowl-label-white">
                    Proyectos
                  </div>

                  {/* Title Overlay - Appears on hover with opacity and animation */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h2 className="text-headline-white">
                        {proyecto.title}
                      </h2>
                    </div>
                  </div>

                  {/* Arrow - Centered on hover, black */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold', fontFamily: '"Liberation Sans", sans-serif' }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop: Two column layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6">
            
            {/* LEFT COLUMN - 4 cards of standard height */}
            <div className="space-y-6">
              {proyectos.slice(0, 4).map((proyecto) => (
                <Link 
                  key={proyecto.id}
                  href={`/proyectos/${proyecto.id}`}
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:scale-[1.01] hover:shadow-lg h-[32rem]">
                    <Image
                      src={proyecto.image}
                      alt={proyecto.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    
                    {/* Label - White by default, white on hover */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30 transition-colors duration-500 prowl-label-white">
                      Proyectos
                    </div>

                    {/* Title Overlay - Appears on hover with opacity and animation */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h2 className="text-headline-white">
                          {proyecto.title}
                        </h2>
                      </div>
                    </div>

                    {/* Arrow - Centered on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold', fontFamily: '"Liberation Sans", sans-serif' }}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* RIGHT COLUMN - 2 cards of standard height + 1 double height */}
            <div className="space-y-6">
              {/* First 2 cards - standard height */}
              {proyectos.slice(4, 6).map((proyecto) => (
                <Link 
                  key={proyecto.id}
                  href={`/proyectos/${proyecto.id}`}
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:scale-[1.01] hover:shadow-lg h-[32rem]">
                    <Image
                      src={proyecto.image}
                      alt={proyecto.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    
                    {/* Label - White by default, white on hover */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30 transition-colors duration-500 prowl-label-white">
                      Proyectos
                    </div>

                    {/* Title Overlay - Appears on hover with opacity and animation */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h2 className="text-headline-white">
                          {proyecto.title}
                        </h2>
                      </div>
                    </div>

                    {/* Arrow - Centered on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold', fontFamily: '"Liberation Sans", sans-serif' }}>→</span>
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
                  <div className="relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:scale-[1.01] hover:shadow-lg h-[64rem]">
                    <Image
                      src={proyectos[6].image}
                      alt={proyectos[6].title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    
                    {/* Label - White by default, white on hover */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30 transition-colors duration-500 prowl-label-white">
                      Proyectos
                    </div>

                    {/* Title Overlay - Appears on hover with opacity and animation */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center px-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <h2 className="text-headline-white">
                          {proyectos[6].title}
                        </h2>
                      </div>
                    </div>

                    {/* Arrow - Centered on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold', fontFamily: '"Liberation Sans", sans-serif' }}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Footer con logo gigante */}
      <Footer />
    </div>
  );
}
