import { tiendanubeFetch } from '../../../utils/tiendanube';
import ProductDetail from '../../components/ProductDetail';
import Header from '../../components/Header';

export default async function ProductPage({ params }) {
  let product = null;
  let error = null;

  try {
    product = await tiendanubeFetch(`products/${params.id}`);
  } catch (err) {
    error = err.message;
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