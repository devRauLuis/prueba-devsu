import { Outlet } from 'react-router-dom';
import Header from './Header';

type RootProps = unknown;

const Root: React.FunctionComponent<RootProps> = () => {
  return (
    <div>
      <Header />
      <main className="bp-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
