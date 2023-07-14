import Product from '@/models/Product';
import bpApi from './customAxios';

export const getProducts = async () => {
  const response = await bpApi.get<Product[]>('bp/products');
  return response.data;
};
