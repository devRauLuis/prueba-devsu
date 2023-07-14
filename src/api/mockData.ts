import Product from '@/models/Product';
import { generateFakeProducts } from '@/utils';

export const fakeProducts: Product[] = generateFakeProducts(100);
