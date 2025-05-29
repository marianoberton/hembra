import { tiendanubeFetch } from '../../utils/tiendanube';
import Header from '../components/Header';

export default async function TestPage() {
  let results: any = {};

  // Test 1: Listar productos
  try {
    const products = await tiendanubeFetch('products');
    results.products = {
      success: true,
      count: products?.length || 0,
      data: products?.slice(0, 3) // Solo primeros 3 para mostrar
    };
  } catch (error) {
    results.products = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
  }

  // Test 2: Obtener categorías
  try {
    const categories = await tiendanubeFetch('categories');
    results.categories = {
      success: true,
      count: categories?.length || 0,
      data: categories?.slice(0, 3)
    };
  } catch (error) {
    results.categories = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
  }

  // Test 3: Obtener información de la tienda
  try {
    const store = await tiendanubeFetch('store');
    results.store = {
      success: true,
      data: {
        name: store?.name,
        domain: store?.domain,
        currency: store?.currency
      }
    };
  } catch (error) {
    results.store = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
  }

  // Test 4: Obtener métodos de envío
  try {
    const shipping = await tiendanubeFetch('shipping_options');
    results.shipping = {
      success: true,
      count: shipping?.length || 0,
      data: shipping?.slice(0, 3)
    };
  } catch (error) {
    results.shipping = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🧪 Panel de Pruebas - Tiendanube API
          </h1>
          <p className="text-gray-600">
            Verificación de conectividad y funcionalidades básicas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Test Productos */}
          <TestCard
            title="📦 Productos"
            result={results.products}
            description="Listado de productos disponibles"
          />

          {/* Test Categorías */}
          <TestCard
            title="🏷️ Categorías"
            result={results.categories}
            description="Categorías de productos"
          />

          {/* Test Tienda */}
          <TestCard
            title="🏪 Información de Tienda"
            result={results.store}
            description="Datos básicos de la tienda"
          />

          {/* Test Envíos */}
          <TestCard
            title="🚚 Métodos de Envío"
            result={results.shipping}
            description="Opciones de envío disponibles"
          />
        </div>

        {/* Resumen */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📊 Resumen de Pruebas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(results).map(([key, result]: [string, any]) => (
              <div key={key} className="text-center">
                <div className={`text-2xl mb-2 ${result.success ? 'text-green-600' : 'text-red-600'}`}>
                  {result.success ? '✅' : '❌'}
                </div>
                <div className="text-sm font-medium text-gray-900 capitalize">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

interface TestCardProps {
  title: string;
  result: any;
  description: string;
}

function TestCard({ title, result, description }: TestCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className={`text-2xl ${result.success ? 'text-green-600' : 'text-red-600'}`}>
          {result.success ? '✅' : '❌'}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      {result.success ? (
        <div className="space-y-2">
          {result.count !== undefined && (
            <div className="text-sm">
              <span className="font-medium">Total:</span> {result.count} elementos
            </div>
          )}
          
          {result.data && (
            <div className="bg-gray-50 rounded-md p-3">
              <pre className="text-xs text-gray-700 overflow-auto max-h-32">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <p className="text-sm text-red-600">{result.error}</p>
        </div>
      )}
    </div>
  );
} 