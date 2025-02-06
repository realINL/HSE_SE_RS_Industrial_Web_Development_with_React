import React from 'react';

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
    <div style={{
      display: "flex",
    flexDirection: "column",
    backgroundColor: "white"
    }}>
      <div style={{
         width: "100%", 
         height: "auto", 
         maxHeight: "400px", 
      }}>
        {image ? <img src={image} alt={name} style={{ width: "100%", 
         height: "auto", 
         maxHeight: "400px", 
         objectFit: "cover"}}/> : <div style={{ width: "600px"}}>No Image</div>}
      </div>

      <div style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        flex: 1}}>

        <h2 style={{
          fontWeight: "bold",
          marginBottom: "12px",
          fontSize: "24px"
        }}>
          {name}
        </h2>

        <h4 style={{
          margin: "10px 0 5px",
          fontSize: "18px",
          color: "#333"
        }}>
          Категория:
        </h4>

        <p style={{ margin: "5px 0", fontSize: "16px" }}>{category}</p>
        
        <h4 style={{
          margin: "10px 0 5px",
          fontSize: "18px",
          color: "#333"
        }}>
          Количество:
        </h4>

        <p style={{ margin: "5px 0", fontSize: "16px" }}>{quantity} {unit}</p>
        
        <h4 style={{
          margin: "10px 0 5px",
          fontSize: "18px",
          color: "#333"
        }}>
          Описание:
        </h4>

        <p style={{color: "black"}}>{description}</p>

      </div>
    </div>
  );
};

export default ProductCard;

