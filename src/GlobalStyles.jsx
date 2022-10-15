import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    /* width */
::-webkit-scrollbar {
  width: 4px;
}


/* Handle */
::-webkit-scrollbar-thumb {
  background: #F4F5F7;
  border-radius: 5px;
}

 }
 body {
    background: #f4f5f7;
 }
`;

export const Wrapper = styled.div`
  padding: 29px 33px;
  background: #f4f5f7;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const Section = styled.section`
  width: 77%;
  height: 700px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const Aside = styled.aside`
  width: 22%;
  height: 700px;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 25%;
    margin-bottom: 10px;
  }
`;
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
  height: 100%;
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
