import classes from '../button.module.css';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: 'primary' | 'secondary';
}

const Button: React.FunctionComponent<ButtonProps> = ({
  color = 'secondary',
  className,
  children,
  ...rest
}) => {
  const variantClasses = classes[`bp-button-${color}`];
  const props = {
    className: `${classes['bp-button']} ${variantClasses} ${className}`,
    ...rest,
  };

  return <button {...props}>{children}</button>;
};

export default Button;
