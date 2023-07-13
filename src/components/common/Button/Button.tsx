import classes from './button.module.css';

const colors = {
  primary: classes['bp-button-primary'],
  secondary: classes['bp-button-secondary'],
};

type ButtonColors = keyof typeof colors;

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: ButtonColors;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  color = 'secondary',
  className,
  children,
  ...rest
}) => {
  const variantClasses = colors[color];

  return (
    <button
      {...rest}
      className={`${classes['bp-button']} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
