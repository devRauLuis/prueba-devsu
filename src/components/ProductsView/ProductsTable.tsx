import { FunctionComponent } from 'react';
import Table from '@/components/common/Table';
import { useProductsQuery } from '@/api/queries';
import useProductsTableColumns from './hooks/useProductsTableColumns';

interface ProductsTableProps {}

const ProductsTable: FunctionComponent<ProductsTableProps> = () => {
  const { data, isLoading } = useProductsQuery();
  const columns = useProductsTableColumns();

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
