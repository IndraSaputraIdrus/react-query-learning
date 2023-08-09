import { useMutation } from "@tanstack/react-query";
import ProductForm from "./ProductForm";
import { ProductType, createProduct, queryClient } from "../libs/fetchProducts";
import { useState } from "react";

type Props = {};

const initialValue = {
  name: "",
  price: 0,
  description: "",
  image: "",
};

const AddProduct = ({}: Props) => {
  const [product, setProduct] = useState<ProductType>(initialValue);

  const { mutate, data, error } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setProduct(initialValue);
    },
  });

  const handleAddProduct = (newProduct: ProductType) => {
    mutate({
      ...newProduct,
    });
    if (error instanceof Error) alert(error.message);
    if (data) alert(data.message);
  };

  return (
    <ProductForm
      onSubmit={handleAddProduct}
      product={product}
      setProduct={setProduct}
    />
  );
};

export default AddProduct;
