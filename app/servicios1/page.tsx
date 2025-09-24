'use client';

import Image from 'next/image';
import Footer from '../components/Footer';

export default function ServiciosPage() {

  return (
    <div className="min-h-screen bg-white">
      
      {/* Main Header Section - Single Column */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <div className="w-full space-y-8">
          
          <div>
            <h1 className="prowl-label mb-4 uppercase" style={{fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '600'}}>
              Servicios
            </h1>
            
            <h2 className="text-display mb-8" style={{color: '#718355', fontFamily: 'Helvetica Neue, sans-serif'}}>
              Soluciones estratégicas para un futuro sostenible.
            </h2>
            
            <div className="space-y-6">
              <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6', fontFamily: 'Helvetica Neue, sans-serif'}}>
                Ofrecemos <strong>soluciones estratégicas creativas e innovadoras</strong> a empresas, 
                instituciones y organizaciones, ayudándolas a comunicar su compromiso con un futuro sostenible.
              </p>
              
              <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6', fontFamily: 'Helvetica Neue, sans-serif'}}>
                Cada propuesta está pensada para ser parte de un sistema circular, donde los materiales 
                extienden su durabilidad y se ahorran recursos, considerando cada una de las fases de su ciclo de vida.
              </p>
              
              <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6', fontFamily: 'Helvetica Neue, sans-serif'}}>
                Nuestro enfoque integral abarca desde la gestión de residuos actuales hasta el diseño 
                regenerativo del futuro, transformando desafíos en oportunidades de innovación sostenible.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Estrategia Circular Section */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <div className="w-full space-y-8">
          
          <div>
            <h2 className="text-display mb-8" style={{color: '#718355', fontFamily: 'Helvetica Neue, sans-serif'}}>
              Estrategia Circular
            </h2>
            
            <div className="space-y-6">
              <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6', fontFamily: 'Helvetica Neue, sans-serif'}}>
                Impulsamos la revalorización de recursos como motor de innovación. Diseñamos estrategias que reducen la dependencia de materiales vírgenes y promueven modelos de producción regenerativos. Acompañamos a empresas, organizaciones e instituciones en la transición hacia sistemas circulares que prolongan la vida útil de los materiales y minimizan el desperdicio desde la raíz.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Diseño de Objetos con Alma Section */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <div className="w-full space-y-8">
          
          <div>
            <h2 className="text-display mb-8" style={{color: '#718355', fontFamily: 'Helvetica Neue, sans-serif'}}>
              Diseño de Objetos con Alma
            </h2>
            
            <div className="space-y-6">
              <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6', fontFamily: 'Helvetica Neue, sans-serif'}}>
                Creamos productos sostenibles con historia, emoción y propósito. Cada objeto que diseñamos busca establecer un vínculo genuino entre las personas, los materiales y su entorno. Valoramos la calidad, la durabilidad y el sentido profundo detrás de cada forma. Diseñamos para que cada pieza tenga una vida larga y significativa.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Innovación Sostenible Section */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <div className="w-full space-y-8">
          
          <div>
            <h2 className="text-display mb-8" style={{color: '#718355', fontFamily: 'Helvetica Neue, sans-serif'}}>
              Innovación Sostenible
            </h2>
            
            <div className="space-y-6">
              <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6', fontFamily: 'Helvetica Neue, sans-serif'}}>
                Integramos creatividad y conocimiento técnico para transformar los desafíos ambientales en soluciones concretas. Aplicamos principios de ecodiseño, biomímesis y biodiseño desde la etapa cero del ciclo de vida, con el objetivo de evitar la generación de residuos y reducir el impacto negativo desde el origen. Diseñar es, para nosotras, una forma de anticipar un futuro mejor.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Prototipado y Desarrollo Section */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <div className="w-full space-y-8">
          
          <div>
            <h2 className="text-display mb-8" style={{color: '#718355', fontFamily: 'Helvetica Neue, sans-serif'}}>
              Prototipado y Desarrollo
            </h2>
            
            <div className="space-y-6">
              <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6', fontFamily: 'Helvetica Neue, sans-serif'}}>
                Materializamos nuestras ideas —y las de nuestros clientes— a través de representaciones visuales precisas y prototipos físicos. Este proceso permite experimentar el diseño en todas sus dimensiones: forma, función y experiencia. Trabajamos de manera iterativa, cuidando cada etapa del desarrollo para llegar a resultados coherentes y funcionales.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Producción Responsable Section */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <div className="w-full space-y-8">
          
          <div>
            <h2 className="text-display mb-8" style={{color: '#718355', fontFamily: 'Helvetica Neue, sans-serif'}}>
              Producción Responsable
            </h2>
            
            <div className="space-y-6">
              <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6', fontFamily: 'Helvetica Neue, sans-serif'}}>
                Ofrecemos soluciones personalizadas que respetan al planeta y a las personas. Producimos diseños propios y ajenos de forma consciente, priorizando procesos éticos, materiales recuperados y colaboraciones con talleres y cooperativas locales. La producción no es solo un resultado: es una declaración de valores.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Images Section */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
            <Image
              src="/images/hero1.jpg"
              alt="Estrategia Circular en acción"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
            <Image
              src="/images/hero2.jpg"
              alt="Gestión de residuos actuales"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Service Images */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
            <Image
              src="/images/hero3.jpg"
              alt="Producciones futuras sostenibles"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
            <Image
              src="/images/1work.avif"
              alt="Diseño regenerativo en práctica"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer con logo gigante */}
      <Footer />

    </div>
  );
}