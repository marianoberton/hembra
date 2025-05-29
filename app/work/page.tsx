import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-display mb-8">
              Work
            </h1>
            <p className="text-headline text-gray-600 max-w-3xl">
              Proyectos que transforman industrias a través del diseño regenerativo y la innovación sostenible.
            </p>
          </div>
          
          {/* Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Haworth Project */}
            <div className="md:col-span-8 relative bg-gray-100 min-h-[400px] overflow-hidden group">
              <Image
                src="/images/1work.avif"
                alt="Haworth - Diseño Industrial"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-headline mb-2">Haworth</h2>
                <p className="text-body opacity-90">
                  Diseñando un futuro libre de plásticos con materiales regenerativos
                </p>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-center bg-gray-50">
              <h3 className="text-headline mb-4">Materiales Regenerativos</h3>
              <p className="text-body text-gray-600 mb-6">
                Colaboración con Haworth para desarrollar una nueva línea de mobiliario de oficina utilizando materiales 100% regenerativos y procesos de fabricación sostenibles.
              </p>
              <div className="space-y-2 text-caption text-gray-500">
                <p>Cliente: Haworth</p>
                <p>Año: 2023</p>
                <p>Categoría: Mobiliario Sostenible</p>
              </div>
            </div>
            
            {/* Additional Work Items */}
            <div className="md:col-span-4 relative bg-gray-100 min-h-[300px] overflow-hidden group">
              <Image
                src="/images/2work.avif"
                alt="Proyecto de Diseño Industrial"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Innovación en Materiales</h3>
              </div>
            </div>
            
            <div className="md:col-span-4 relative bg-gray-100 min-h-[300px] overflow-hidden group">
              <Image
                src="/images/3work.avif"
                alt="Proyecto de Sostenibilidad"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-body font-medium">Diseño Circular</h3>
              </div>
            </div>
            
            <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-center bg-black text-white">
              <h3 className="text-headline mb-4">Nuestro Enfoque</h3>
              <p className="text-body opacity-90 mb-6">
                Cada proyecto comienza con una pregunta: ¿Cómo puede este diseño regenerar en lugar de solo sostener?
              </p>
              <Link 
                href="/studio" 
                className="text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors"
              >
                Conoce más sobre nosotros →
              </Link>
            </div>
            
            {/* Process Section */}
            <div className="md:col-span-12 py-12">
              <h2 className="text-headline mb-8">Nuestro Proceso</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <h4 className="text-body font-medium mb-2">Investigación</h4>
                  <p className="text-caption text-gray-600">
                    Análisis profundo del contexto, usuarios y sistemas existentes.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold">2</span>
                  </div>
                  <h4 className="text-body font-medium mb-2">Ideación</h4>
                  <p className="text-caption text-gray-600">
                    Generación de conceptos que priorizan el impacto regenerativo.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold">3</span>
                  </div>
                  <h4 className="text-body font-medium mb-2">Prototipado</h4>
                  <p className="text-caption text-gray-600">
                    Desarrollo iterativo con materiales y procesos sostenibles.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <span className="text-black font-bold">4</span>
                  </div>
                  <h4 className="text-body font-medium mb-2">Implementación</h4>
                  <p className="text-caption text-gray-600">
                    Lanzamiento con medición de impacto regenerativo.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
} 