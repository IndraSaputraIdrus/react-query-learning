import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../libs/fetchProducts";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const ProductsList = () => {
  const navigate = useNavigate();

  const truncate = (string: string) => {
    return string.length < 30 ? string : string.slice(0, 30) + "...";
  };

  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError && error instanceof Error) {
    return <ErrorMessage error={error} />;
  }
  return (
    <div
      className={clsx(
        "grid",
        "grid-cols-1 lg:grid-cols-2",
        "place-content-center",
        "gap-10"
      )}
    >
      {products?.map((product) => (
        <div
          key={product.id}
          className={clsx(
            "flex justify-between",
            "h-56 p-3 rounded-xl",
            "border border-blue-200"
          )}
        >
          <div className="flex-1 space-y-3 p-3 flex flex-col justify-center">
            <h1
              onClick={() => navigate(`/product/${product.id}`)}
              className="text-xl sm:text-3xl font-bold cursor-pointer transition hover:opacity-70"
            >
              {product.name}
            </h1>
            <h2 className="text-xs sm:text-lg">
              Rp. {product.price.toLocaleString("ID-id")}
            </h2>
            <h3 className="text-xl hidden truncate sm:block">
              {truncate(product.description)}
            </h3>
          </div>
          <div className="flex-1 overflow-hidden flex justify-end">
            <img
              src={product.image}
              className="mix-blend-multiply block h-full object-contain lg:object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
