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
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 767px) {
    margin-top: 10px;
    width: 100%;
    height: 300px;
    overflow: scroll;
    scrollbar-color: red grey;
    border-radius: 10px 10px 10px 10px;
  }
`;

export const BussinessContextBig = styled(Container)`
  height: 100%;
  width: 75%;
  border-radius: 0;
  box-shadow: none;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: 100%;
    width: 100%;
    overflow: scroll;
  }
`;

export const BussinessContextTitle = styled.h1`
  font-weight: 600;
  font-size: 21px;
  line-height: 33px;
  color: #242325;
`;
export const BussinessContent = styled.div`
  flex-direction: row;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #6b778c;
  margin-left: 56px;
  overflow: auto;
  @media screen and (max-width: 767px) {
    height: 500px;
    overflow: scroll;
  }
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

export const BussinessInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const BussinessAvatarWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
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
  position: relative;
  max-width: 100%;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #6b778c;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  overflow: hidden;
`;
