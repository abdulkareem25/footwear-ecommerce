import axios from 'axios';

const api = axios.create({
  baseURL: 'http//localhost:3000/api/auth',
  withCredentials: true
});

export const signUp = async (username, email, password) => {
  const response = await api.post('/sign-up', {
    username,
    email,
    password
  })
  return response.data;
};

export const signIn = async (credential, password) => {
  const response = await api.post('/sign-in', {
    credential,
    password
  });
  return response.data;
};

export const getMe = async () => {
  const response = await api.get('/get-me');
  return response.data;
};

export const signOut = async () => {
  const response = await api.post('/sign-out');
  return response.data;
};