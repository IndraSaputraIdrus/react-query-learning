import AddProduct from "../components/AddProduct";
import ProductsList from "../components/ProductsList";

const HomePage = () => {
  return (
    <div className="mx-auto px-10 py-7">
      <h1 className="text-5xl font-semibold text-center">Product List</h1>
      <div className="max-w-lg mx-auto mb-20">
        <AddProduct />
      </div>
      <ProductsList />
    </div>
  );
};

export default HomePage;
