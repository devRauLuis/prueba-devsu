import { Search } from 'tabler-icons-react';
import { Input } from '../components/common/Input';
import Button from '../components/common/Button';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div className="">
      <div className="flex justify-center">Home</div>
      <div className="flex justify-between">
        <Input placeholder="Search..." icon={<Search size={'1.3rem'} />} />
        <Button color="primary">Agregar</Button>
      </div>
    </div>
  );
};

export default Home;
