import Image from 'next/image';
import Link from 'next/link';

export default function EstudioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero2.jpg"
            alt="Hembra Estudio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
            HEMBRA
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
            Estudio de diseño industrial con la misión de transformar residuos en soluciones sustentables
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8 tracking-wide">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Creamos productos con propósito, integrando diseño, impacto social y compromiso ambiental. 
                Reimaginamos los materiales descartados como oportunidades para un futuro más consciente.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Diseñamos con la convicción de que la sustentabilidad no es una opción, sino una responsabilidad.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/hero1.jpg"
                alt="Proceso de diseño sustentable"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-16 text-center tracking-wide">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b3c1a2] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Sustentabilidad</h3>
              <p className="text-gray-600">
                Fusionamos creatividad, oficio y estrategia para dar nueva vida a lo que otros descartan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#a8836d] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Impacto Social</h3>
              <p className="text-gray-600">
                Generamos trabajo con el menor consumo de recursos posible, creando valor para la comunidad.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#909b82] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Diseño Consciente</h3>
              <p className="text-gray-600">
                Cada producto es una oportunidad para demostrar que el diseño puede ser hermoso y responsable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-16 text-center tracking-wide">
            Nuestro Proceso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#a8836d] mb-4">01</div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Identificación</h3>
              <p className="text-gray-600 text-sm">
                Detectamos materiales descartados con potencial de transformación
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#a8836d] mb-4">02</div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Análisis</h3>
              <p className="text-gray-600 text-sm">
                Estudiamos las propiedades y posibilidades de cada material
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#a8836d] mb-4">03</div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Diseño</h3>
              <p className="text-gray-600 text-sm">
                Creamos soluciones que maximizan el valor del material recuperado
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#a8836d] mb-4">04</div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Producción</h3>
              <p className="text-gray-600 text-sm">
                Fabricamos con técnicas artesanales y procesos sustentables
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-[#3D4A3D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-wide">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Colaboramos con empresas y organizaciones que comparten nuestra visión de un futuro más sustentable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto"
              className="px-8 py-3 bg-white text-[#3D4A3D] font-medium tracking-wider hover:bg-gray-100 transition-colors duration-300 rounded-lg"
            >
              Contactar
            </Link>
            <Link 
              href="/proyectos"
              className="px-8 py-3 border-2 border-white text-white font-medium tracking-wider hover:bg-white hover:text-[#3D4A3D] transition-colors duration-300 rounded-lg"
            >
              Ver Proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 