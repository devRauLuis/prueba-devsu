import Product from '@/models/Product';

export const defaultProduct: Partial<Product> = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};

export const initialErrors: Record<keyof Partial<Product>, string> = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};
