import { Loader2 } from 'tabler-icons-react';
import classes from './input.module.css';

export interface InputProps
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
  loading?: boolean;
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
  loading,
  ...props
}) => {
  const hasError = touched && error;
  const isValid = touched && valid;
  const showValidMessage = isValid && !hasError;
  const sizeClassName = classes[`bp-input-${size}`];
  const wrapperSizeClassName = classes[`bp-input-wrapper-${size}`];
  const disabledClassName = props.disabled ? classes['bp-input-disabled'] : '';

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
        } ${
          isValid ? classes['bp-input-valid'] : ''
        } ${wrapperSizeClassName} ${disabledClassName}`}
      >
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          className={`${classes['bp-input']} ${sizeClassName} ${className}`}
          {...props}
        />
        {loading && <Loader2 className="animate-spin" />}
        {icon && <div className={`${classes['bp-input-icon']}`}>{icon}</div>}
      </div>
      {hasError && (
        <div className={`${classes['bp-input-error-message']} mt-xs`}>
          {error}
        </div>
      )}
      {showValidMessage && !hasError && (
        <div className={`${classes['bp-input-valid-message']}`}>Valid!</div>
      )}
    </div>
  );
};

export default Input;
