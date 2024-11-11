import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  /* You can add specific styles for the SVG if needed */
  svg {
    max-width: 100%;
    height: auto; /* Maintain aspect ratio */
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Form = styled.form`
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;

  /* Remove outline */
  &:focus {
    outline: none;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #333;
  border: none;
  border-bottom: 2px solid #aaa;
  background: transparent;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: #6e8efb;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -15px;
    font-size: 12px;
    color: #6e8efb;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 0;
  font-size: 16px;
  color: #aaa;
  pointer-events: none;
  transition: 0.3s;
`;

export const SubmitButton = styled.button`
  display: inline-block;
  width: 100%;
  padding: 12px 0;
  margin-top: 10px;
  background-color: #6e8efb;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #a777e3;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

