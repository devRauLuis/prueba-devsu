import Product from '@/models/Product';
import { createProduct, deleteProduct, updateProduct } from './requests';
import { queryClient } from '@/App';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

function alertError(error: unknown) {
  if (error instanceof AxiosError)
    // The uses of alert and confirm throughout the app should be replaced by a proper modal or confirmation dialog
    alert(`${error?.code}: ${error.response?.data}`);
}
export const useCreateProductMutation = () => {
  return useMutation((newProduct: Product) => createProduct(newProduct), {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      alert('Creado exitosamente!');
    },
    onError: (error) => {
      alertError(error);
    },
  });
};

export const useUpdateProductMutation = () => {
  return useMutation(
    (updatedProduct: Product) => updateProduct(updatedProduct),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['products']);
        alert('Actualizado exitosamente!');
      },
      onError: (error) => {
        alertError(error);
      },
    },
  );
};

export const useDeleteProductMutation = () => {
  return useMutation((productId: string) => deleteProduct(productId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      alert('Eliminado exitosamente!');
    },
    onError: (error) => {
      alertError(error);
    },
  });
};
