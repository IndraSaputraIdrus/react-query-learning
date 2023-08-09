import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const DetailPage = () => {
  const params = useParams();
  const id = params.id ? params.id : "";

  return (
    <div className="py-16">
      <h1 className="text-3xl font-semibold text-center pb-10">
        Product Detail
      </h1>
      <div className="max-w-2xl mx-auto px-5">
        <ProductDetail id={id} />
      </div>
    </div>
  );
};

export default DetailPage;
