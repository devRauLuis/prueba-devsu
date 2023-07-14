import { Link, LinkProps } from 'react-router-dom';
import classes from '../button.module.css';

interface LinkButtonProps
  extends React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  > {
  to: string;
  color?: 'primary' | 'secondary';
  className?: string;
}

const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
  color,
  className,
  ...rest
}) => {
  const variantClasses = classes[`bp-button-${color}`];
  const props = {
    className: `${classes['bp-button']} ${variantClasses} ${className}`,
    ...rest,
  };

  return <Link {...props} />;
};

export default LinkButton;
