import { Link, LinkProps } from 'react-router-dom';
import classes from '../button.module.css';

interface LinkButtonProps extends LinkProps {
  to: string;
  color?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode | string;
}

const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
  color,
  className,
  children,
  ...rest
}) => {
  const variantClasses = classes[`bp-button-${color}`];
  const props = {
    className: `${classes['bp-button']} ${classes['bp-link-button']} ${variantClasses} ${className}`,
    ...rest,
  };

  return <Link {...props}>{children}</Link>;
};

export default LinkButton;
