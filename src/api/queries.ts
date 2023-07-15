import { useQuery } from '@tanstack/react-query';
import { getProducts, verifyIdExists } from './requests';
import { getFakeProducts, verifyFakeIdExists } from './mockRequests';
import { useState } from 'react';

const enableFakeData =
  new URL(window.location.href).searchParams.get('enableFakeData') === '1';

export const useProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: enableFakeData ? getFakeProducts : getProducts,
  });

export const useVerifyIdExists = () => {
  const [id, setId] = useState('');

  const query = useQuery(
    ['verify-id-exists', id],
    () => (enableFakeData ? verifyFakeIdExists(id) : verifyIdExists(id)),
    {
      enabled: false, // The query will not automatically run
    },
  );

  return { query, id, setId };
};
