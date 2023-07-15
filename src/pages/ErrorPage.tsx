import Header from '@/components/Header';
import Button from '@/components/common/buttons/Button';
import { useNavigate, useRouteError } from 'react-router-dom';
import { MoodSadDizzy } from 'tabler-icons-react';

interface ErrorPageProps {}

const ErrorPage: React.FunctionComponent<ErrorPageProps> = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="flex flex-col align-center mt-lg">
        <MoodSadDizzy size={68} />
        <h3>Error</h3>
        <h6 className="">{error.statusText ?? error.message} </h6>
        <Button onClick={() => navigate(-1)}>Go back</Button>
      </div>
    </div>
  );
};

export default ErrorPage;
