import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

export const Title = styled.h1`
  font-size: 42px;
`;

export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  font-weight: bold;

  &[type="submit"] {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: tomato;
  padding: 10px;
  text-align: center;
`;

export const Switcher = styled.span`
  text-align: center;
  a {
    color: #1d9bf0;
  }
`;

export const Button = styled.span`
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 24px;
`;
