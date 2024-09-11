import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// Ejemplo de método para registrar un usuario
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registrando usuario:', error.response.data);
    throw error;
  }
};

// Ejemplo de método para iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/users/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error iniciando sesión:', error.response.data);
    throw error;
  }
};

export default api;
