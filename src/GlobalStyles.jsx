import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;

 }
 body {
    background: #f4f5f7;
 }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 29px 33px;
  background: #f4f5f7;
`;
export const Section = styled.section``;
export const Aside = styled.aside``;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 12px 12px;
  padding: 16px 24px;
  display: flex;
  height: 700px;
`;
export const ContainerTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  font-style: normal;
  text-transform: uppercase;
  color: #242325;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background: #ffffff;
  border-radius: 12px 12px 0px 0px;
  border-bottom: 1px solid #f4f5f7;
  height: 65px;
`;

export default GlobalStyle;
