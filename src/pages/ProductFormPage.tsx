import ProductFormView from '@/components/ProductFormView';
import { useParams } from 'react-router-dom';

interface ProductFormPageProps {}

const ProductFormPage: React.FunctionComponent<ProductFormPageProps> = () => {
  const { productId } = useParams();
  return <ProductFormView productId={productId} />;
};

export default ProductFormPage;
