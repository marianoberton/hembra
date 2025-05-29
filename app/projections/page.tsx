import Header from '../components/Header';
import Link from 'next/link';

export default function ProjectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl">
            <h1 className="text-display mb-8">
              Projections
            </h1>
            
            <div className="space-y-8">
              <div className="bg-yellow-400 p-8 rounded-xl">
                <div className="border border-black inline-block px-2 py-1 text-xs font-medium mb-4">
                  NEW
                </div>
                <h2 className="text-headline mb-4">Summer 2023</h2>
                <h3 className="text-headline mb-6">Barriers to Entry</h3>
                <p className="text-body italic underline">
                  Produced in collaboration with Barriers to Action
                </p>
              </div>
              
              <p className="text-body text-gray-600">
                Nuestras proyecciones exploran futuros posibles a través del diseño regenerativo. 
                Cada informe analiza tendencias emergentes, desafíos sistémicos y oportunidades 
                para la transformación positiva.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-headline mb-4">Metodología</h3>
                  <ul className="space-y-2 text-body text-gray-600">
                    <li>• Análisis de tendencias globales</li>
                    <li>• Investigación de materiales emergentes</li>
                    <li>• Modelado de escenarios futuros</li>
                    <li>• Colaboración interdisciplinaria</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-headline mb-4">Enfoque</h3>
                  <p className="text-body text-gray-600">
                    Cada proyección se basa en datos reales y perspectivas expertas para 
                    imaginar futuros regenerativos alcanzables.
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <Link 
                  href="/work" 
                  className="btn btn-primary"
                >
                  Ver Proyectos Relacionados
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 