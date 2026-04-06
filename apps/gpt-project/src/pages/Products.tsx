import { useFetchProductList } from '@/services/fetchProductList/useFetchProductList';
import { Product } from '@/components/product/Product';
import { useMemo, useState } from 'react';
import { queryKeys } from '@/shared/queryKeys';
import { useQueryClient } from '@tanstack/react-query';
import { useFetchCategories } from '@/services/fetchCategories/useFetchCategories';
import AddProductForm from '@/components/product/AddProductForm';

const Products = () => {
  const [category, setCategory] = useState<string>('all');
  const { data, error } = useFetchProductList(category);
  const queryClient = useQueryClient();

  const { data: categoryList } = useFetchCategories();
  const categories = useMemo(() => ['all', ...(categoryList ?? [])], [categoryList]);

  const handleMouseEnter = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.product.detail(id),
      queryFn: () => fetch(`${'https://fakestoreapi.com'}/products/${id}`).then((r) => r.json()),
      staleTime: 1000 * 60 * 2,
    });
  };

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <AddProductForm />
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="category">Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: 6 }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {data?.map((product) => (
          <div key={product.id} onMouseEnter={() => handleMouseEnter(product.id)}>
            <Product {...product} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
