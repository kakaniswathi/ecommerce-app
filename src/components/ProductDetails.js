import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="bg-color">
      <h2>Product Details</h2>
      <div>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
