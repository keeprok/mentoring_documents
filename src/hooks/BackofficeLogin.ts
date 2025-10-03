import { useState } from 'react';

export const useLoginForm = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return {
    username,
    setUserName,
    password,
    setPassword,
    isLoading,
    setIsLoading,
    isOpen,
    setIsOpen,
  };
};

// 첫번째 의문 : 나눈목적이 모호하다
// 두번째 의문 : const [isLoading, setIsLoading] = useState(false); 이걸 왜같이 있는지 납득할만한이유가 필욯다
