import Product from '@/models/Product';
import bpApi from './customAxios';

export const getProducts = async () => {
  const response = await bpApi.get<Product[]>('bp/products');
  return response.data;
};

export const verifyIdExists = async (id: string) => {
  const response = await bpApi.get<boolean>('bp/products/verification', {
    params: { id },
  });
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await bpApi.delete<string>('bp/products', {
    params: { id },
  });

  return response.data;
};

export const createProduct = async (product: Product) => {
  const response = await bpApi.post<Product>('bp/products', product);

  return response.data;
};

export const updateProduct = async (product: Product) => {
  const response = await bpApi.put<Product>('bp/products', product);

  return response.data;
};
