import { tiendanubeFetch } from '../../../utils/tiendanube';
import ProductDetail from '../../components/ProductDetail';
import Header from '../../components/Header';
import { TiendanubeProduct } from '../../../types/tiendanube';

// Ayuda a Next.js a identificar las rutas dinámicas en tiempo de build
export async function generateStaticParams() {
  // Idealmente, aquí deberías hacer un fetch de todos los IDs de productos
  // para que Next.js pueda pre-renderizar cada página de producto.
  // Por ahora, devolvemos un array vacío o con algunos IDs de ejemplo
  // si tienes muchos productos, considera no pre-renderizarlos todos.
  
  // Ejemplo: si quieres pre-renderizar los productos con ID 1, 2, 3
  // return [{ id: '1' }, { id: '2' }, { id: '3' }];
  
  // Si no quieres pre-renderizar ninguna página de producto en el build:
  return []; 
}

// Define el tipo de los parámetros directamente en la función del componente
export default async function ProductPage({ params }: { params: { id: string } }) {
  let product: TiendanubeProduct | null = null;
  let error: string | null = null;

  try {
    product = await tiendanubeFetch<TiendanubeProduct>(`products/${params.id}`);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Error desconocido';
    console.error('Error fetching product:', err);
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-red-800 mb-2">
              Error al cargar el producto
            </h2>
            <p className="text-red-600">{error}</p>
          </div>
        </main>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Producto no encontrado
            </h2>
            <p className="text-gray-600">
              El producto que buscas no existe o ha sido eliminado.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductDetail product={product} />
      </main>
    </div>
  );
} 