import api from './api';

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserById = async (id) => {
  const response = await api.get(`/user/${id}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await api.post('/user/create', user);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await api.put(`/user/update/${user.userid}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/user/delete/${id}`);
  return response.data;
};