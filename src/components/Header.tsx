import { Link } from 'react-router-dom';
import logoSvg from '/logo.svg';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="bp-header">
      <Link to="/">
        <img src={logoSvg} alt="" className="bp-header-logo" />
      </Link>
    </header>
  );
};

export default Header;
