import { Product as ProductType } from '@/services/types';
import { Link } from 'react-router-dom';

type ProductProps = ProductType;

export const Product = ({ id, title, price, description, image }: ProductProps) => {
  return (
    <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <h4>
        <Link
          to={`/product/${id}`}
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          {title}
        </Link>
      </h4>
      <p style={{ fontWeight: 'bold' }}>${price}</p>
      <p style={{ fontSize: '0.8rem' }}>{description}</p>
      <img src={image} alt={title} width={100} height={100} />
    </div>
  );
};
