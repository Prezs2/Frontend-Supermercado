import api from './api';

export const getusers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getuserById = async (id) => {
  const response = await api.get(`/user/${id}`);
  return response.data;
};

export const createuser = async (user) => {
  const response = await api.post('/user/create', user);
  return response.data;
};

export const updateuser = async (id, user) => {
  const response = await api.put(`/user/update/${id}`, user);
  return response.data;
};

export const deleteuser = async (id) => {
  const response = await api.delete(`/user/delete/${id}`);
  return response.data;
};