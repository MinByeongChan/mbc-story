import { useState } from 'react';
import { useAddProduct } from '@/services/mutations/useAddProduct';

export const AddProductForm = () => {
  const { mutateAsync, isPending } = useAddProduct();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('https://via.placeholder.com/150');
  const [category, setCategory] = useState('electronics');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateAsync({ title, price: Number(price), description, image, category });
    setTitle('');
    setPrice(0);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 400 }}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <input placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving...' : 'Add Product'}
      </button>
    </form>
  );
};

export default AddProductForm;
