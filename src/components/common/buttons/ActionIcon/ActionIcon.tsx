import React from 'react';
import classes from './action-icon.module.css';

interface ActionIconProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'size'
  > {
  icon: React.ReactElement;
  onClick?: () => void;
  color?: string;
  variant?: 'filled' | 'subtle';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  xs: 14,
  sm: 19.8,
  md: 27.99,
  lg: 39.58,
  xl: 55.97,
};

const ActionIcon: React.FC<ActionIconProps> = ({
  icon,
  onClick,
  color = 'currentColor',
  size = 'md',
  variant = 'subtle',
  ...props
}) => {
  const pixelSize = sizeMap[size];

  return (
    <button
      className={`${classes['bp-action-icon']} ${
        classes['bp-action-icon-' + variant]
      }`}
      onClick={onClick}
      {...props}
      style={{ color, width: pixelSize, height: pixelSize, ...props.style }}
    >
      {React.cloneElement(icon, { size: pixelSize })}
    </button>
  );
};

export default ActionIcon;
