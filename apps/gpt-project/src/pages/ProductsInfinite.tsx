import { useInfiniteProducts } from "@/services/fetchProductList/useInfiniteProducts";
import { Product } from "@/components/product/Product";

const ProductsInfinite = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    error,
  } = useInfiniteProducts();

  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <ul>
        {data?.pages.flat().map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </ul>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default ProductsInfinite;


