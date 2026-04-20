import api from './api';

export const getProviders = async () => {
  const response = await api.get('/Providers');
  return response.data;
};

export const getProviderById = async (id) => {
  const response = await api.get(`/provider/${id}`);
  return response.data;
};

export const createProvider = async (Provider) => {
  const response = await api.post('/provider/create', Provider);
  return response.data;
};

export const updateProvider = async (Provider) => {
  const response = await api.put(`/provider/update/${Provider.Providerid}`, Provider);
  return response.data;
};

export const deleteProvider = async (id) => {
  const response = await api.delete(`/provider/delete/${id}`);
  return response.data;
};