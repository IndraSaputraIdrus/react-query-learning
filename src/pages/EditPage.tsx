import { useQuery } from "@tanstack/react-query";
import EditProduct from "../components/EditProduct";
import { useParams } from "react-router-dom";
import { getProductById } from "../libs/fetchProducts";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

const EditPage = () => {
  const params = useParams();
  const id = params.id ? params.id : "";

  const { data, error, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <Loading />;
  if (error instanceof Error) return <ErrorMessage error={error} />;

  return (
    <div className="mx-auto px-10 py-7">
      <h1 className="text-5xl font-semibold text-center">Product List</h1>
      <div className="max-w-lg mx-auto mb-20">
        <EditProduct prevData={data} />
      </div>
    </div>
  );
};

export default EditPage;
