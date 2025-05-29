import Header from '../components/Header';
import Link from 'next/link';

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl">
            <h1 className="text-display mb-8">
              Studio
            </h1>
            
            <div className="space-y-8">
              <p className="text-headline">
                PROWL is an industrial design studio on a mission to help companies build a regenerative future.
              </p>
              
              <p className="text-body text-gray-600">
                Somos un estudio multidisciplinario que combina diseño industrial, estrategia de producto y pensamiento sistémico para crear soluciones que no solo resuelven problemas, sino que regeneran los sistemas en los que operan.
              </p>
              
              <p className="text-body text-gray-600">
                Nuestro enfoque se centra en la colaboración con empresas visionarias que buscan transformar sus industrias a través del diseño consciente y la innovación sostenible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-headline mb-4">Servicios</h3>
                  <ul className="space-y-2 text-body text-gray-600">
                    <li>• Diseño Industrial</li>
                    <li>• Estrategia de Producto</li>
                    <li>• Investigación de Materiales</li>
                    <li>• Prototipado Rápido</li>
                    <li>• Consultoría en Sostenibilidad</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-headline mb-4">Filosofía</h3>
                  <p className="text-body text-gray-600">
                    Creemos que el diseño tiene el poder de regenerar. Cada proyecto es una oportunidad para crear un impacto positivo duradero.
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <Link 
                  href="/work" 
                  className="btn btn-primary"
                >
                  Ver Nuestro Trabajo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 