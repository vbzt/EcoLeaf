import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/userContext';

const CheckUser = () => {
  const { checkUser } = useContext(Context);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        await checkUser();
      } catch (error) {
        console.error('Erro ao verificar o usuário:', error);
      }
    };

    checkUserStatus();
  }, [checkUser])

  return (
    <div>
    </div>
  );
};

export default CheckUser;
