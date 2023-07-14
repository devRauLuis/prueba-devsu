import { Tooltip } from 'react-tooltip';
import ColProps from '@/models/ColProps';
import classes from './table.module.css';
import { CSSProperties, useState } from 'react';
import LoadingOverlay from '../LoadingOverlay';
import ColumnHeader from './ColumnHeader';
import Paginator from './Paginator';

interface TableProps<T> {
  data: T[];
  columns: ColProps<T>[];
  style?: CSSProperties;
  className?: string;
  pageSizeOptions?: number[];
  defaultPageSize?: number;
  totalElements?: number;
  loading?: boolean;
}

const Table = <T,>({
  data,
  columns,
  pageSizeOptions = [5, 10, 20],
  defaultPageSize = 5,
  totalElements,
  loading,
  ...props
}: TableProps<T>) => {
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil((totalElements ?? data.length) / pageSize);

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatorProps = {
    currentPage,
    setCurrentPage,
    totalPages,
    totalElements: totalElements ?? data?.length,
    pageSize,
    pageSizeOptions,
    setPageSize,
  };

  return (
    <>
      <LoadingOverlay isLoading={!!loading}>
        <div className={classes['bp-table-container']}>
          <Tooltip id="header-tooltip" />
          <div className={classes['bp-table-wrapper']}>
            <table className={classes['bp-table']} {...props}>
              <thead className={classes['bp-table-thead']}>
                <tr>
                  {columns?.map(({ width, header, description, field }) => (
                    <ColumnHeader
                      key={`${header}${String(field)}header`}
                      {...{ header, description, width }}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.slice(startIndex, endIndex).map((item, index) => (
                    <tr key={index} className={classes['bp-table-body-tr']}>
                      {columns?.map((col, index) => (
                        <td
                          key={index}
                          className={classes['bp-table-td']}
                          style={{ width: col.width || 'auto' }}
                        >
                          {col.body ? col.body(item) : String(item[col.field])}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      className={`${classes['bp-table-no-records-text']} p-md`}
                      colSpan={columns.length}
                    >
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <Paginator {...paginatorProps} />
        </div>
      </LoadingOverlay>
    </>
  );
};

export default Table;
