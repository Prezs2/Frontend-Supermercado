import api from './api';

export const getProducts = async () => {
  const response = await api.get('/Products');
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/Product/${id}`);
  return response.data;
};

export const createProduct = async (Product) => {
  const response = await api.post('/Product/create', Product);
  return response.data;
};

export const updateProduct = async (Product) => {
  const response = await api.put(`/Product/update/${Product.Productid}`, Product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/Product/delete/${id}`);
  return response.data;
};