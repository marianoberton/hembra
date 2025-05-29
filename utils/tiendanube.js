// utils/tiendanube.js
const STORE_ID        = process.env.TN_STORE_ID;
const TN_ACCESS_TOKEN = process.env.TN_ACCESS_TOKEN;

async function tiendanubeFetch(endpoint, options = {}) {
  if (!STORE_ID || !TN_ACCESS_TOKEN) {
    throw new Error('Faltan las variables de entorno TN_STORE_ID o TN_ACCESS_TOKEN');
  }

  const url = `https://api.tiendanube.com/v1/${STORE_ID}/${endpoint}`;
  const headers = {
    'Authorization': `bearer ${TN_ACCESS_TOKEN}`,
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

module.exports = { tiendanubeFetch };
