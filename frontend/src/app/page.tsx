"use client";
import { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from './services/api';
import ProductForm from './components/ProductForm';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className='container mx-auto p-4 bg-black'>
      <h1>Estoque</h1>
      <ProductForm />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nome_produto} - {product.estoque} - {product.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}