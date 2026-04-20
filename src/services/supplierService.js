import api from './api';

export const getSuppliers = async () => {
  const response = await api.get('/Providers');
  return response.data;
};

export const getSupplierById = async (id) => {
  const response = await api.get(`/provider/${id}`);
  return response.data;
};

export const createSupplier = async (Supplier) => {
  const response = await api.post('/provider/create', Supplier);
  return response.data;
};

export const updateSupplier = async (Supplier) => {
  const response = await api.put(`/provider/update/${Supplier.providerid}`, Supplier);
  return response.data;
};

export const deleteSupplier = async (id) => {
  const response = await api.delete(`/provider/delete/${id}`);
  return response.data;
};