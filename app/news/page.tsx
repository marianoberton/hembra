import Header from '../components/Header';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl">
            <h1 className="text-display mb-8">
              News
            </h1>
            
            <div className="space-y-12">
              {/* Featured Article */}
              <article className="border-b border-gray-200 pb-8">
                <h2 className="text-headline mb-4">
                  The Local Project: PROWL's Regenerative Approach to Design
                </h2>
                <p className="text-body text-gray-600 mb-4">
                  Nuestro enfoque regenerativo ha sido destacado en The Local Project, 
                  explorando cómo el diseño industrial puede crear impacto positivo 
                  en las comunidades locales.
                </p>
                <div className="flex items-center space-x-4 text-caption text-gray-500">
                  <span>15 de Noviembre, 2023</span>
                  <span>•</span>
                  <span>The Local Project</span>
                </div>
              </article>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article>
                  <h3 className="text-body font-medium mb-2">
                    Colaboración con Haworth: Materiales del Futuro
                  </h3>
                  <p className="text-caption text-gray-600 mb-3">
                    Anunciamos nuestra asociación estratégica para desarrollar 
                    la próxima generación de materiales regenerativos.
                  </p>
                  <div className="text-caption text-gray-500">
                    8 de Noviembre, 2023
                  </div>
                </article>

                <article>
                  <h3 className="text-body font-medium mb-2">
                    Reconocimiento en Design Week
                  </h3>
                  <p className="text-caption text-gray-600 mb-3">
                    PROWL ha sido seleccionado como uno de los estudios 
                    más innovadores del año por Design Week.
                  </p>
                  <div className="text-caption text-gray-500">
                    2 de Noviembre, 2023
                  </div>
                </article>

                <article>
                  <h3 className="text-body font-medium mb-2">
                    Lanzamiento de Summer 2023 Report
                  </h3>
                  <p className="text-caption text-gray-600 mb-3">
                    Nuestro último informe "Barriers to Entry" ya está 
                    disponible para descarga gratuita.
                  </p>
                  <div className="text-caption text-gray-500">
                    25 de Octubre, 2023
                  </div>
                </article>

                <article>
                  <h3 className="text-body font-medium mb-2">
                    Conferencia: El Futuro del Diseño Regenerativo
                  </h3>
                  <p className="text-caption text-gray-600 mb-3">
                    Participamos en la conferencia internacional sobre 
                    diseño sostenible en Copenhague.
                  </p>
                  <div className="text-caption text-gray-500">
                    18 de Octubre, 2023
                  </div>
                </article>
              </div>

              {/* As seen in section */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-headline mb-6 text-center">As seen in</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="text-body font-medium">Design Week</div>
                  <div className="text-body font-medium">The Local Project</div>
                  <div className="text-body font-medium">Dezeen</div>
                  <div className="text-body font-medium">Wallpaper*</div>
                </div>
              </div>
              
              <div className="mt-12">
                <Link 
                  href="/studio" 
                  className="btn btn-primary"
                >
                  Conoce Más Sobre Nosotros
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 