import classes from './select.module.css';

interface SelectProps
  extends Omit<
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    'size'
  > {
  label?: string;
  options: Array<{ value: string; label: string } | string | number>;
  placeholder?: string;
  valid?: boolean;
  icon?: React.ReactNode;
  touched?: boolean;
  error?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Select: React.FunctionComponent<SelectProps> = ({
  name,
  label,
  options,
  size = 'md',
  ...props
}) => {
  const sizeClassName = classes[`bp-select-${size}`];

  const renderOption = (
    option: { value: string; label: string } | string | number,
  ) => {
    if (typeof option === 'string' || typeof option === 'number') {
      return (
        <option key={option.toString()} value={option.toString()}>
          {option}
        </option>
      );
    } else {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    }
  };

  return (
    <div>
      {label && (
        <label htmlFor={name} className={classes['bp-select-label']}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={name}
        className={`${classes['bp-select']} ${sizeClassName}`}
      >
        {options.map(renderOption)}
      </select>
    </div>
  );
};

export default Select;
