import { QueryClient } from "@tanstack/react-query";

export type ProductType = {
  id?: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const host = "https://api-my-products-ndr.vercel.app";

export const getProducts = async (): Promise<ProductType[]> => {
  const response = await fetch(`${host}/products`);
  const data = await response.json();

  if (data.error) throw Error(data.error);

  return data;
};

export const getProductById = async (id: string): Promise<ProductType> => {
  const response = await fetch(`${host}/products/${id}`);
  const data = await response.json();

  if (data.error) throw Error(data.error);

  return data;
};

export const createProduct = async (newProduct: ProductType) => {
  const response = await fetch(`${host}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  const data = await response.json();

  if (data.error) throw Error(data.error);

  return data;
};

export const deleteProduct = async (id: string) => {
  const response = await fetch(`${host}/products/${id}`, { method: "DELETE" });
  const data = await response.json();
  if (data.error) throw Error(data.error);
  return data;
};

export const updateProduct = async (newProduct: ProductType) => {
  const response = await fetch(`${host}/products/${newProduct.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  const data = await response.json();

  if (data.error) throw Error(data.error);

  return data;
};
