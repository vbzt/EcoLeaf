import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import useFlashMessage from './useFlashMessage';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {
    checkUser(); // Verifica a autenticação ao montar o componente
  }, []);

  const checkUser = async () => {
    try {
      const { data } = await api.get('/users/checkuser', { withCredentials: true });
      setAuthenticated(!!data.currentUser); // Atualiza o estado baseado na resposta
    } catch (error) {
      setAuthenticated(false); // Se houver erro, assume que não está autenticado
    }
  };

  const login = async (user) => {
    let msgText = 'Login realizado com sucesso!';
    let msgType = 'success';

    try {
      await api.post('/users/login', user, { withCredentials: true });
      await checkUser(); // Verifica o usuário após o login
    } catch (error) {
      msgText = error.response.data.message;
      msgType = 'error';
    }

    setFlashMessage(msgText, msgType);
  };

  const logout = async () => {
    let msgText = 'Logout realizado com sucesso!';
    let msgType = 'success';

    try {
      await api.get('/users/logout', { withCredentials: true });
      setAuthenticated(false); // Atualiza o estado para deslogado
      navigate('/login'); // Redireciona para a página de login
    } catch (error) {
      msgText = error.response?.data?.message || 'Erro ao fazer logout.';
      msgType = 'error';
    }

    setFlashMessage(msgText, msgType);
  };

  return { authenticated, login, logout };
};

export default useAuth;
