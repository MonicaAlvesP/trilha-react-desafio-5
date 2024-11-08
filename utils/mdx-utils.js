import { api } from '../services/api';

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const getPostById = async (id) => {
  try {
    const response = await api.get(`/posts?id=eq.${id}`);
    return response.data[0];
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }
};