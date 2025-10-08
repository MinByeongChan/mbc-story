import { useFetchProductList } from "@/services/fetchProductList/useFetchProductList";
import { Product } from "@/components/product/Product";

const Products = () => {
  const { data, error } = useFetchProductList();

  if (error) return <div>Error: {error.message}</div>;
  return (
    <ul>{data?.map((product) => <Product key={product.id} {...product} />)}</ul>
  );
};

export default Products;
