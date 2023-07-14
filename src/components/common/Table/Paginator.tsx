import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import ActionIcon from '../buttons/ActionIcon';
import classes from './table.module.css';
import Select from '@/components/common/Select';

interface PaginatorProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  totalElements: number;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  pageSizeOptions: number[];
}

const Paginator: React.FunctionComponent<PaginatorProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
  totalElements,
  pageSize,
  setPageSize,
  pageSizeOptions,
}) => {
  return (
    <div className={`${classes['bp-table-footer']} gap-md`}>
      <div>{totalElements} resultados</div>
      <div className="flex align-center gap-sm ml-auto">
        <ActionIcon
          icon={<ChevronLeft />}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        />
        <div>{` ${
          totalPages > 0 ? currentPage + 1 : 0
        } de ${totalPages} `}</div>
        <ActionIcon
          icon={<ChevronRight />}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
          }
          disabled={totalPages === 0 || currentPage === totalPages - 1}
        />
      </div>

      <Select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
        options={pageSizeOptions}
        style={{ minWidth: 60, textAlign: 'center' }}
      />
    </div>
  );
};

export default Paginator;
