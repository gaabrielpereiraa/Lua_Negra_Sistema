"use client";
import { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../app/services/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    const newProduct = {
      name: 'Produto teste',
      description: 'Esse é um produto',
      price: 100,
      quantity: 10,
    };
    const createdProduct = await createProduct(newProduct);
    setProducts([...products, createdProduct]);
  };

  return (
    <div className='items-center'>
      <h1>Estoque</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}