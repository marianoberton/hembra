// utils/tiendanube.ts
import { TiendanubeFetchOptions } from '../types/tiendanube';

const STORE_ID        = process.env.TN_STORE_ID;
const TN_ACCESS_TOKEN = process.env.TN_ACCESS_TOKEN;

export async function tiendanubeFetch<T = any>(
  endpoint: string, 
  options: TiendanubeFetchOptions = {}
): Promise<T> {
  if (!STORE_ID || !TN_ACCESS_TOKEN) {
    throw new Error('Faltan las variables de entorno TN_STORE_ID o TN_ACCESS_TOKEN');
  }

  const url = `https://api.tiendanube.com/v1/${STORE_ID}/${endpoint}`;
  const headers = {
    'Authentication': `bearer ${TN_ACCESS_TOKEN}`,
    'User-Agent':     'MiAppNextJS/1.0',
    'Content-Type':   'application/json',
    ...(options.headers || {})
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error en la petición a Tiendanube: ${res.status} ${errorText}`);
  }

  return res.json();
}
