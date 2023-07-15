import ColProps from '@/models/ColProps';
import Product from '@/models/Product';
import ActionIcon from '../../common/buttons/ActionIcon';
import { DotsVertical, Menu2 } from 'tabler-icons-react';
import Menu from '../../common/Menu';
import { useNavigate } from 'react-router-dom';
import { useDeleteProductMutation } from '@/api/mutations';

const useProductsTableColumns = () => {
  const navigate = useNavigate();

  const { mutateAsync: deleteProduct } = useDeleteProductMutation();

  const columns: ColProps<Product>[] = [
    {
      header: 'Logo',
      field: 'logo',
      body: (row) => <img src={row.logo} alt={`Logo for ${row.name}`} />,
    },
    { header: 'Nombre del producto', field: 'name' },
    {
      header: 'Descripción',
      field: 'description',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      header: 'Fecha de liberación',
      field: 'date_release',
      description: 'Lorem ipsum dolor sit amet',
      body: (row) => new Date(row.date_release).toLocaleDateString(),
    },
    {
      header: 'Fecha de reestructuración',
      field: 'date_revision',
      description: 'Lorem ipsum dolor sit amet',
      body: (row) => new Date(row.date_revision).toLocaleDateString(),
    },
    {
      header: '',
      field: 'id',
      body: (row) => (
        <div className="flex justify-center">
          <Menu
            trigger={<ActionIcon icon={<DotsVertical />} />}
            options={[
              {
                label: 'Editar',
                onClick: () => navigate('/formulario-producto/' + row.id),
              },
              {
                label: 'Eliminar',
                onClick: async () => {
                  const deleteConfirmation = window.confirm(
                    'Seguro que desea eliminar este producto?',
                  );
                  if (deleteConfirmation) await deleteProduct(row.id);
                },
              },
            ]}
          />
        </div>
      ),
      width: '10%',
      frozen: true,
    },
  ];

  return columns;
};

export default useProductsTableColumns;
