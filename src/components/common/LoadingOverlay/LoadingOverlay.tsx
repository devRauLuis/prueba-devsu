import { Loader3 } from 'tabler-icons-react';
import classes from './loading-overlay.module.css';

interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const LoadingOverlay: React.FunctionComponent<LoadingOverlayProps> = ({
  isLoading,
  children,
}) => {
  return (
    <div className={`${classes.container}`}>
      {isLoading && (
        <div className={`${classes.overlay}`}>
          <Loader3
            color="#ffdd00"
            size={32}
            strokeWidth={1}
            className={`${classes.spinner} animate-spin`}
            data-testid="loading-spinner"
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default LoadingOverlay;
