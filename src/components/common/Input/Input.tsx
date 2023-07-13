import classes from './input.module.css';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  placeholder?: string;
  valid?: boolean;
  icon?: React.ReactNode;
  touched?: boolean;
  error?: string;
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
  ...props
}) => {
  const hasError = touched && error;
  const showValidMessage = valid && !hasError;

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
        }`}
      >
        <input
          {...props}
          id={name}
          placeholder={placeholder}
          className={`${classes['bp-input']} ${className}`}
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
