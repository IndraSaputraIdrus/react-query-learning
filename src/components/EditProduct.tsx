import { useEffect, useState } from "react";
import { ProductType, updateProduct } from "../libs/fetchProducts";
import ProductForm from "./ProductForm";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type Props = {
  prevData: ProductType | undefined;
};

const EditProduct = ({ prevData }: Props) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType>({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const { mutate, error } = useMutation({
    mutationFn: updateProduct,
    onError: () => {
      alert(error instanceof Error && error.message);
    },
    onSuccess: () => navigate(-1),
  });

  useEffect(() => {
    if (prevData) {
      setProduct(prevData);
    }
  }, []);

  const handleSubmit = (newProduct: ProductType) => {
    mutate(newProduct);
  };

  return (
    <ProductForm
      onSubmit={handleSubmit}
      product={product}
      setProduct={setProduct}
    />
  );
};

export default EditProduct;
