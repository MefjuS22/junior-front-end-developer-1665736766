import styled from 'styled-components';

export const NavBar = styled.header`
  width: 100%;
  display: flex;
  height: 60px;
  padding: 10px 40px 50px 40px;
  justify-content: space-between;
  align-items: baseline;
  > img {
    height: fit-content;
    width: fit-content;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 1px solid #d4d6da;
    > img {
      background: #0165ff;
      height: 42px;
      width: 42px;
      border-radius: 50%;
    }
  }
`;
