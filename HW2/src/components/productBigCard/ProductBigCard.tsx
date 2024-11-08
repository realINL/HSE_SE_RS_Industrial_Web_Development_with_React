import React from 'react';
import './ProductBigCard.css';

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
    <div className="product-bigCard">
      <div className="product-bigImage">
        {image ? <img src={image} alt={name} /> : <div className="no-bigImage">No Image</div>}
      </div>
      <div className="product-bigDetails">
        <h2>{name}</h2>
        <h4>Категория:</h4>
        <p>{category}</p>
        <h4>Количество:</h4>
        <p>{quantity} {unit}</p>
        <h4>Описание:</h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
