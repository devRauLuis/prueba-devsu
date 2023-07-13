import { useRouteError } from 'react-router-dom';

interface ErrorPageProps {}

const ErrorPage: React.FunctionComponent<ErrorPageProps> = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <>
      Error
      <>{error.statusText ?? error.message} </>
    </>
  );
};

export default ErrorPage;
