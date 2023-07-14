import { useQuery } from '@tanstack/react-query';
import { getProducts } from './requests';
import { getFakeProducts } from './mockRequests';

const enableFakeData =
  new URL(window.location.href).searchParams.get('enableFakeData') === '1';

export const useProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: enableFakeData ? getFakeProducts : getProducts,
  });
