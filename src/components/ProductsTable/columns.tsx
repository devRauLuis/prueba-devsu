import ColProps from '@/models/ColProps';
import Product from '@/models/Product';
import ActionIcon from '../common/buttons/ActionIcon';
import { DotsVertical } from 'tabler-icons-react';

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
        <ActionIcon icon={<DotsVertical />} />
      </div>
    ),
    width: '10%',
    frozen: true,
  },
];

export default columns;
