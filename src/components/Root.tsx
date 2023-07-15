import { Link, Outlet } from 'react-router-dom';
import Header from './Header';

interface RootProps {}

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
