import { deleteProduct, getProductById } from "../libs/fetchProducts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BsTrash3, BsPencilSquare } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });

  const { mutate, error: mutateError } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => navigate("/"),
  });

  const handleDelete = () => {
    if (!confirm("yakin?")) return;
    mutate(id);
  };

  if (isLoading) return <h2 className="text-center">Loading...</h2>;
  if (error instanceof Error) {
    return <h2 className="text-center text-red-700 italic">{error.message}</h2>;
  }
  if (mutateError instanceof Error) {
    return (
      <h2 className="text-center text-red-700 italic">{mutateError.message}</h2>
    );
  }

  return (
    <div className={clsx("grid", "grid-cols-1 sm:grid-cols-6 gap-x-8")}>
      <div className="col-span-3">
        <img src={data?.image} className="object-cover w-full" />
      </div>
      <div
        className={clsx(
          "col-span-3",
          "flex flex-col",
          "items-center sm:items-start sm:justify-center",
          "space-y-2"
        )}
      >
        <h2 className="text-2xl font-semibold text-slate-900">{data?.name}</h2>
        <p className="bg-cyan-100 text-cyan-500 w-max px-6 py-0.5 rounded-full shadow-md">
          Rp. {data?.price.toLocaleString("id-ID")}
        </p>
        <p className="text-slate-700 italic text-lg">{data?.description}</p>
      </div>
      <div className="col-span-6 mt-10 flex justify-center items-center gap-5">
        <button
          onClick={() => navigate("/")}
          className={clsx(
            "bg-green-200 text-green-700",
            "hover:bg-green-300 hover:text-green-800",
            "flex items-center justify-center space-x-2",
            "px-4 py-1",
            "rounded",
            "transition"
          )}
        >
          <AiOutlineLeft />
          <span>Back</span>
        </button>
        <button
          onClick={() => navigate(`/product/edit/${id}`)}
          className={clsx(
            "bg-yellow-200 text-yellow-700",
            "hover:bg-yellow-300 hover:text-yellow-800",
            "flex items-center justify-center space-x-2",
            "px-4 py-1",
            "rounded",
            "transition"
          )}
        >
          <span>Edit</span>
          <BsPencilSquare />
        </button>
        <button
          onClick={handleDelete}
          className={clsx(
            "bg-red-200 text-red-700",
            "hover:bg-red-300 hover:text-red-800",
            "flex items-center justify-center space-x-2",
            "px-4 py-1",
            "rounded",
            "transition"
          )}
        >
          <span>Delete</span>
          <BsTrash3 />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
