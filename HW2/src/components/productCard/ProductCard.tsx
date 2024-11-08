import React from 'react';
import './ProductCard.css';

type ProductCardProps = {
  name: string;
  description: string;
  category: string;
  quantity: number;
  unit: string;
  image?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, description, category, quantity, unit, image }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {image ? <img src={image} alt={name} /> : <div className="no-image">No Image</div>}
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p className="description">{description}
        </p>
        <p>Категория: {category}</p>
        <p>
          Количество: {quantity} {unit}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
