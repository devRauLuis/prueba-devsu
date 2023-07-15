import { FunctionComponent } from 'react';
import Table from '@/components/common/Table';
import columns from './columns';
import { useProductsQuery } from '@/api/queries';

interface ProductsTableProps {}

const ProductsTable: FunctionComponent<ProductsTableProps> = () => {
  const { data, isLoading } = useProductsQuery();

  return (
    <Table
      data={data ?? []}
      columns={columns ?? []}
      style={{ minWidth: '50rem' }}
      loading={isLoading}
    />
  );
};

export default ProductsTable;
