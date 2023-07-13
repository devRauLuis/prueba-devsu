import { Link, Outlet } from 'react-router-dom';
import logoSvg from '/logo.svg';

interface RootProps {}

const Root: React.FunctionComponent<RootProps> = () => {
  return (
    <div>
      <header className="bp-header">
        <Link to="/">
          <img src={logoSvg} alt="" className="bp-header-logo" />
        </Link>
      </header>
      <main className="bp-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
