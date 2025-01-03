// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3636',
  timeout: 5000,
});

// Função GET
export const getData = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Erro GET:', error);
    throw error;
  }
};

// Função POST
export const postData = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Erro POST:', error);
    throw error;
  }
};

// Função DELETE
export const deleteData = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    console.error('Erro DELETE:', error);
    throw error;
  }
};

// Função PATCH
export const patchData = async (url, data) => {
  try {
    const response = await api.patch(url, data);
    return response.data;
  } catch (error) {
    console.error('Erro PATCH:', error);
    throw error;
  }
};
