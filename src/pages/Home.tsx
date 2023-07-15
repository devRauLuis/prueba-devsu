import ProductsView from '../components/ProductsView';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div className="">
      <ProductsView />
    </div>
  );
};

export default Home;
