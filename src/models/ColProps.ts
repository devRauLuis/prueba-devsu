type ColProps<T> = {
  header: string;
  field: keyof T;
  description?: string;
  body?: (row: T) => React.ReactNode;
  width?: string;
  alignFrozen?: 'left' | 'right';
  frozen?: boolean;
};

export default ColProps;
