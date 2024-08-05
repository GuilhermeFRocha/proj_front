import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Faz com que o container ocupe toda a altura da tela */
  background-color: #f0f2f5; /* Cor de fundo opcional */
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%; /* Para garantir que o formulário não ultrapasse a largura máxima */
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white; /* Cor de fundo do formulário */
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #000;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
