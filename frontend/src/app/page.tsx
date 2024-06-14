"use client";
import { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from './services/api';
import { getOrders, createOrders, updateOrders, deleteOrders } from './services/api';
import ProductForm from './components/ProductForm';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [pedidos, setOrders] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      const pedidos = await getOrders();
      setOrders(pedidos);
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className='container mx-auto p-4 bg-black'>
      <h1>Estoque</h1>
      <h2>Produtos</h2>
      <ProductForm />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nome_produto} - {product.estoque} - {product.preco}
          </li>
        ))}
      </ul>
      <hr></hr>
      <h2>Pedidos</h2>
        {pedidos.map((pedido) => (
            <li key={pedido.id}>
              {pedido.id_funcionario} - {pedido?.data_do_pedio} - {pedido.status_do_pedido} - {pedido.id_produto}
            </li>
          ))}
    </div>
  );
}