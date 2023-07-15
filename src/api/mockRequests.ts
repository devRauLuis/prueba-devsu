import Product from '@/models/Product';
import { fakeProducts } from './mockData';

export const getFakeProducts = async () => {
  return new Promise<Product[]>((resolve) =>
    setTimeout(() => resolve(fakeProducts), 5000),
  );
};

export const verifyFakeIdExists = async (id: string) => {
  return new Promise<boolean>((resolve) =>
    setTimeout(() => resolve(fakeProducts.some((p) => p.id === id)), 2000),
  );
};
