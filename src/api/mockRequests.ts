import Product from '@/models/Product';
import { fakeProducts } from './mockData';

export const getFakeProducts = async () => {
  return new Promise<Product[]>((resolve) =>
    setTimeout(() => resolve(fakeProducts), 20000),
  );
};
