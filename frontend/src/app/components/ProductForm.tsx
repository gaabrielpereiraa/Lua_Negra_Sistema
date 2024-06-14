import { useState } from 'react';
import { createProduct } from '../services/api';

const ProductForm = () => {
  const [product, setProduct] = useState({
    nome_produto: String,
    descricao: String,
    preco: Number,
    estoque: Number,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productToSubmit = {
      ...product,
      preco: parseFloat(product.preco, 10),
      estoque: parseInt(product.estoque, 10),
    };

    try {
      await createProduct(productToSubmit);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md space-y-4">
      <div>
        <label htmlFor="nome_produto" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          name="nome_produto"
          id="nome_produto"
          value={product.nome_produto}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
        <textarea
          name="descricao"
          id="descricao"
          value={product.descricao}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Preço</label>
        <input
          type="number"
          name="preco"
          id="preco"
          value={parseFloat(product.preco)}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Quantidade no estoque</label>
        <input
          type="number"
          name="estoque"
          id="estoque"
          value={parseFloat(product.estoque)}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Adicionar Produto
        </button>
      </div>
    </form>
  );
};

export default ProductForm;