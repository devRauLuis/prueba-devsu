import classes from './input.module.css';

interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  > {
  label?: string;
  placeholder?: string;
  valid?: boolean;
  icon?: React.ReactNode;
  touched?: boolean;
  error?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Input: React.FunctionComponent<InputProps> = ({
  name,
  label,
  placeholder,
  valid,
  icon,
  className,
  touched,
  error,
  size = 'md',
  ...props
}) => {
  const hasError = touched && error;
  const showValidMessage = valid && !hasError;
  const sizeClassName = classes[`bp-input-${size}`];
  const wrapperSizeClassName = classes[`bp-input-wrapper-${size}`];

  return (
    <div>
      {label && (
        <label htmlFor={name} className={classes['bp-input-label']}>
          {label}
        </label>
      )}
      <div
        className={`${classes['bp-input-wrapper']} ${
          hasError ? classes['bp-input-error'] : ''
        } ${wrapperSizeClassName}`}
      >
        <input
          {...props}
          id={name}
          placeholder={placeholder}
          className={`${classes['bp-input']} ${sizeClassName} ${className}`}
        />
        {icon && <div className={`${classes['bp-input-icon']}`}>{icon}</div>}
      </div>
      {hasError && (
        <div className={`${classes['bp-input-error-message']}`}>{error}</div>
      )}
      {showValidMessage && (
        <div className={`${classes['bp-input-valid-message']}`}>Valid!</div>
      )}
    </div>
  );
};

export default Input;
