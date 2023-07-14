import { InfoCircle } from 'tabler-icons-react';
import classes from './table.module.css';

interface ColumnHeaderProps {
  header: string;
  description?: string;
  width?: string;
  alignFrozen?: 'left' | 'right';
  frozen?: boolean;
}

const ColumnHeader: React.FunctionComponent<ColumnHeaderProps> = ({
  width,
  description,
  header,
}) => {
  return (
    <th
      className={classes['bp-table-th']}
      style={{
        width: width || 'auto',
      }}
    >
      <div className="flex gap-sm align-center w-full">
        <div className="truncate">{header}</div>

        {description && (
          <div className="flex" style={{ width: '30%' }}>
            <InfoCircle
              data-tooltip-id="header-tooltip"
              data-tooltip-content={description}
              size={20}
              fill="#8B8C90"
              color="white"
            />
          </div>
        )}
      </div>
    </th>
  );
};

export default ColumnHeader;
