'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuthCallbackPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();
  
  const [tokenData, setTokenData] = useState<any>(null);

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    
    if (error) {
      setStatus('error');
      setMessage(`Error de autenticación: ${error}`);
      return;
    }
    
    if (code) {
      // Intercambiar código por token automáticamente
      exchangeCodeForToken(code);
    } else {
      setStatus('error');
      setMessage('No se recibió código de autorización');
    }
  }, [searchParams]);

  const exchangeCodeForToken = async (code: string) => {
    try {
      const response = await fetch('/api/auth/tiendanube', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || 'Error al obtener token');
      }

      const result = await response.json();
      setTokenData(result.data);
      setStatus('success');
      setMessage('¡Token obtenido exitosamente!');
      
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Error desconocido');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          {status === 'loading' && (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">Procesando autenticación...</h2>
            </>
          )}
          
          {status === 'success' && (
            <>
              <div className="text-green-600 text-6xl mb-4">✅</div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">¡Autenticación exitosa!</h2>
              <p className="text-gray-600 mb-4">{message}</p>
              
              {tokenData && (
                <div className="bg-gray-50 rounded-lg p-4 text-left mb-4">
                  <h3 className="font-semibold text-gray-800 mb-3">🔐 Agrega estas credenciales a tu .env.local:</h3>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto">
                    <div className="space-y-1">
                      <div>TN_STORE_ID={tokenData.store_id}</div>
                      <div>TN_ACCESS_TOKEN={tokenData.access_token}</div>
                      <div className="text-gray-500"># Scopes autorizados: {tokenData.scope}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    ⚠️ Copia estas credenciales y agrégalas a tu archivo .env.local
                  </p>
                </div>
              )}
            </>
          )}
          
          {status === 'error' && (
            <>
              <div className="text-red-600 text-6xl mb-4">❌</div>
              <h2 className="text-xl font-semibold text-red-800 mb-2">Error de autenticación</h2>
              <p className="text-gray-600">{message}</p>
            </>
          )}
          
          <div className="mt-6 space-x-4">
            {status === 'success' && tokenData && (
              <a
                href="/test"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                🧪 Probar integración
              </a>
            )}
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 