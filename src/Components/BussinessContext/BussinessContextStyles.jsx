import styled from 'styled-components';
import { Container, ContainerTitle } from '../../GlobalStyles';

export const BussinessTitle = styled(ContainerTitle)`
  color: #0165ff;
  width: 100%;
  gap: 1rem;
`;

export const BussinessContainer = styled(Container)`
  width: 100%;
  height: 700px;
  padding: 0 0 4px 4px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  border-bottom: 2px solid #0165ff;
  gap: 1rem;
`;

export const NotificationContainer = styled(Container)`
  background: #f4f5f7;
  width: 25%;
  height: 100%;
  border-radius: 0px 0px 0px 10px;
  box-shadow: none;
  padding: 12px 8px 8px 8px;
  display: flex;
  flex-direction: column;
`;

export const BussinessContextBig = styled(Container)`
  height: 100%;
  width: 75%;
  border-radius: 0;
  box-shadow: none;
`;

export const Notification = styled.div`
  height: 100px;
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: ${({ active }) =>
    active ? '0px 8px 16px rgba(84, 84, 84, 0.2)' : '0'};
  padding: 14px 20px 20px 20px;
  margin-bottom: 8px;
  cursor: pointer;
`;
