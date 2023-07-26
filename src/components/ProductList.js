import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productsData.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
