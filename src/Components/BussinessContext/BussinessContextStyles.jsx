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
  flex-direction: column;
`;

export const BussinessContextTitle = styled.h1`
  font-weight: 600;
  font-size: 21px;
  line-height: 33px;
  color: #242325;
`;
export const BussinessContent = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #6b778c;
`;

export const BussinessAuthor = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #242325;
`;
export const BussinessDate = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #6b778c;
`;

export const Notification = styled.div`
  height: 100px;
  width: 100%;
  background: ${({ read }) => (read ? 'transparent' : '#ffffff')};
  border-radius: 8px;
  box-shadow: ${({ active }) =>
    active ? '0px 8px 16px rgba(84, 84, 84, 0.2)' : '0'};
  padding: 14px 20px 20px 20px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const NotificationNew = styled.div`
  text-align: center;
  display: block;
  line-height: 20px;
  width: 39px;
  height: 20px;
  background: #0165ff;
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  color: #eaf2fe;
  text-transform: uppercase;
  display: ${({ isNew }) => (isNew ? 'inline' : 'none')};
`;

export const NotificationData = styled.h3`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #6b778c;
  gap: 0.5rem;
`;

export const NotificationTitle = styled.h2`
  font-weight: 700;
  font-size: 12px;
  color: ${({ isNew }) => (isNew ? '#0165FF' : '#242325')};
`;

export const NotificationContent = styled.span`
  display: inline-block;
  width: 250px;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #6b778c;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
