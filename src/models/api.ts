export type TranslationInput = {
  is_ltr: boolean;
  text: string;
  translation_type: number;
  lang: number;
};

export type ProductItemInput = {
  discount?: number;
  price: number;
  quantity: number;
  product?: number;
};

export type CreateProductInput = {
  id?: number;
  name: Array<TranslationInput>;
  description: Array<TranslationInput>;
  items: Array<ProductItemInput>;
  category: number;
};

export type OrderItemInput = {
  quantity: number;
  price: number;
  order: number;
  product: number;
};

export type CreateOrderInput = {
  id?: number;
  items: Array<OrderItemInput>;
};
