import LinkButton from '../common/buttons/LinkButton';
import Input from '../common/inputs/Input';
import ProductsTable from './ProductsTable';

interface ProductsViewProps {}

const ProductsView: React.FunctionComponent<ProductsViewProps> = () => {
  return (
    <div className="">
      <div className="flex justify-between align-center">
        <Input placeholder="Search..." style={{ width: 200 }} />
        <LinkButton to="/formulario-producto" color="primary">
          Agregar
        </LinkButton>
      </div>
      <div className="bg-white mt-md p-lg">
        <ProductsTable />
      </div>
    </div>
  );
};

export default ProductsView;
