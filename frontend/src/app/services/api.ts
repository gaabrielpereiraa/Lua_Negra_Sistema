import axios from 'axios';

const API_URL = 'http://localhost:8000';

//Produtos

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/produto`);
  return response.data;
};

export const createProduct = async (produto) => {
  const response = await axios.post(`${API_URL}/produto`, produto);
  return response.data;
};

export const updateProduct = async (id, produto) => {
  const response = await axios.put(`${API_URL}/produto/${id}`, produto);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/produto/${id}`);
  return response.data;
};

//Funcionarios

export const getEmployees = async () => {
  const response = await axios.get(`${API_URL}/funcionario`);
  return response.data;
};

export const createEmployees = async (funcionario) => {
  const response = await axios.post(`${API_URL}/funcionario`, funcionario);
  return response.data;
};

export const updateEmployees = async (id, funcionario) => {
  const response = await axios.put(`${API_URL}/funcionario/${id}`, funcionario);
  return response.data;
};

export const deleteEmployees = async (id) => {
  const response = await axios.delete(`${API_URL}/funcionario/${id}`);
  return response.data;
};

//Pedido

export const getOrders = async () => {
  const response = await axios.get(`${API_URL}/pedido`);
  return response.data;
};

export const createOrders = async (pedido) => {
  const response = await axios.post(`${API_URL}/pedido`, pedido);
  return response.data;
};

export const updateOrders = async (id, pedido) => {
  const response = await axios.put(`${API_URL}/pedido/${id}`, pedido);
  return response.data;
};

export const deleteOrders = async (id) => {
  const response = await axios.delete(`${API_URL}/pedido/${id}`);
  return response.data;
};

//Pedido-Produto

export const getOrdersProducts = async () => {
  const response = await axios.get(`${API_URL}/pedido_produto`);
  return response.data;
};

export const createOrdersProducts = async (pedido_produto) => {
  const response = await axios.post(`${API_URL}/pedido_produto`, pedido_produto);
  return response.data;
};

export const updateOrdersProducts = async (id, pedido_produto) => {
  const response = await axios.put(`${API_URL}/pedido_produto/${id}`, pedido_produto);
  return response.data;
};

export const deleteOrdersProducts = async (id) => {
  const response = await axios.delete(`${API_URL}/pedido_produto/${id}`);
  return response.data;
};