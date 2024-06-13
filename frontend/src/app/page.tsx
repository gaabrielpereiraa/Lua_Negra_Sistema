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
      name: 'New Product',
      description: 'This is a new product',
      price: 100,
      quantity: 10,
    };
    const createdProduct = await createProduct(newProduct);
    setProducts([...products, createdProduct]);
  };

  return (
    <div>
      <h1>Product Inventory</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add Product</button>
      {/* Adicione mais funcionalidades conforme necessário */}
    </div>
  );
}