import { useFetchProductById } from "@/services/fetchProductById/useFetchProductById";
import { useParams, useLoaderData } from "react-router-dom";

export const ProductDetails = () => {
  const { id = "" } = useParams();
  const _prefetched = useLoaderData();
  console.log('_prefetched', _prefetched);
  const { data, error } = useFetchProductById(String(id));

  if (!id || error) return <div>Error: {error?.message}</div>;
  return (
    <div>
      <h1>{data.title}</h1>
      <p>${data.price}</p>
      <p>{data.description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <img src={data.image} alt={data.title} />
      </div>
    </div>
  );
};

export default ProductDetails;
