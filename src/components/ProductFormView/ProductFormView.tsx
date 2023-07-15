import { useProductsQuery } from '@/api/queries';
import ProductForm from './ProductForm';
import classes from './add-product-view.module.css';
import { useEffect, useState } from 'react';
import Product from '@/models/Product';
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from '@/api/mutations';
import { useNavigate } from 'react-router-dom';
import { formatToYYYYMMDD } from '@/utils/date';

interface ProductFormViewProps {
  productId?: string;
}

const ProductFormView: React.FunctionComponent<ProductFormViewProps> = ({
  productId,
}) => {
  const [product, setProduct] = useState<Product>();
  const { data: products } = useProductsQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      const newProduct = products?.find((p) => p.id === productId);
      setProduct(
        newProduct
          ? {
              ...newProduct,
              date_release: formatToYYYYMMDD(newProduct?.date_release ?? ''),
              date_revision: formatToYYYYMMDD(newProduct?.date_revision ?? ''),
            }
          : undefined,
      );
    }
  }, [products]);

  const { mutateAsync: createProduct } = useCreateProductMutation();
  const { mutateAsync: updateProduct } = useUpdateProductMutation();

  const handleSubmit = async (form: Product) => {
    const navigateHome = () => navigate('/');
    if (product)
      await updateProduct(form, {
        onSuccess: () => {
          navigateHome();
        },
      });
    else
      await createProduct(form, {
        onSuccess: () => {
          navigateHome();
        },
      });
  };

  return (
    <div className="" style={{ backgroundColor: 'white' }}>
      <div className={`${classes['bp-add-product-form-header']} p-md`}>
        <h3 className="mb-0">Formulario de Registro</h3>
      </div>

      <div className="p-md">
        <ProductForm product={product} submitForm={handleSubmit} />
      </div>
    </div>
  );
};

export default ProductFormView;
