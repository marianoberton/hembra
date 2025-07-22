export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display mb-8">Servicios</h1>
          <p className="text-body text-gray-600 mb-12">
            Ofrecemos soluciones integrales de diseño industrial sustentable, 
            transformando residuos en productos con propósito.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl">
              <h3 className="text-headline mb-4">Estrategia Circular y Revalorización</h3>
              <p className="text-body text-gray-600">
                Desarrollamos estrategias para transformar residuos en recursos valiosos.
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-xl">
              <h3 className="text-headline mb-4">Diseño de Objetos con Alma</h3>
              <p className="text-body text-gray-600">
                Creamos productos que conectan con las personas y el medio ambiente.
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-xl">
              <h3 className="text-headline mb-4">Prototipado y Desarrollo</h3>
              <p className="text-body text-gray-600">
                Llevamos ideas desde el concepto hasta prototipos funcionales.
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-xl">
              <h3 className="text-headline mb-4">Producción Responsable</h3>
              <p className="text-body text-gray-600">
                Implementamos procesos de producción conscientes y sustentables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 