import InputForm from "./InputForm";
import clsx from "clsx";
import { ProductType } from "../libs/fetchProducts";

type Props = {
  onSubmit: (product: ProductType) => void;
  product: ProductType;
  setProduct: (product: ProductType) => void;
};

const ProductForm = ({ onSubmit, product, setProduct }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ ...product, price: Number(product.price) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full mx-auto my-10 space-y-5 flex flex-col">
        <InputForm
          label="Name"
          name="name"
          placeholder="Enter name"
          value={product.name}
          onChange={handleInputChange}
        />
        <InputForm
          label="Price"
          name="price"
          placeholder="Enter price"
          value={product.price === 0 ? "" : product.price}
          onChange={handleInputChange}
        />
        <InputForm
          label="Description"
          name="description"
          placeholder="Enter description"
          value={product.description}
          onChange={handleInputChange}
        />
        <InputForm
          label="Image"
          name="image"
          placeholder="Enter image"
          value={product.image}
          onChange={handleInputChange}
        />
        <button
          className={clsx(
            "bg-blue-300 text-blue-600",
            "px-10 py-1 ml-auto",
            "rounded",
            "transition",
            "focus:outline-none focus:ring-2 focus:ring-blue-600",
            "hover:bg-blue-500 hover:text-blue-200"
          )}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
