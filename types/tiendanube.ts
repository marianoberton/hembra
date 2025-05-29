export interface TiendanubeImage {
  id: number;
  src: string;
  alt?: string;
  position: number;
}

export interface TiendanubePromotionalOffer {
  id: number;
  price: number;
  compare_at_price?: number;
  start_date?: string;
  end_date?: string;
}

export interface TiendanubeVariant {
  id: number;
  price: number;
  promotional_offer?: TiendanubePromotionalOffer;
  stock_management: boolean;
  stock: number;
  weight?: number;
  width?: number;
  height?: number;
  depth?: number;
  sku?: string;
  values: Array<{
    en?: string;
    es?: string;
    pt?: string;
  }>;
}

export interface TiendanubeProduct {
  id: number;
  name: {
    en?: string;
    es?: string;
    pt?: string;
  } | string;
  description?: {
    en?: string;
    es?: string;
    pt?: string;
  } | string;
  handle?: string;
  attributes?: Array<{
    en?: string;
    es?: string;
    pt?: string;
  }>;
  published: boolean;
  free_shipping: boolean;
  requires_shipping: boolean;
  canonical_url?: string;
  video_url?: string;
  seo_title?: {
    en?: string;
    es?: string;
    pt?: string;
  };
  seo_description?: {
    en?: string;
    es?: string;
    pt?: string;
  };
  brand?: string;
  created_at: string;
  updated_at: string;
  variants: TiendanubeVariant[];
  tags?: string;
  images: TiendanubeImage[];
  categories?: Array<{
    id: number;
    name: {
      en?: string;
      es?: string;
      pt?: string;
    };
  }>;
  
  // Campos calculados/derivados
  price: number;
  promotional_offer?: TiendanubePromotionalOffer;
  stock_management: boolean;
  stock: number;
  stock_unlimited: boolean;
  weight?: number;
  sku?: string;
}

export interface TiendanubeProductsResponse {
  products?: TiendanubeProduct[];
  // Para paginación
  page?: number;
  per_page?: number;
  total?: number;
}

export interface TiendanubeFetchOptions extends RequestInit {
  headers?: Record<string, string>;
} 