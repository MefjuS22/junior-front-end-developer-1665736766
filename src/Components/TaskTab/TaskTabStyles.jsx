import styled from 'styled-components';
import { Container, ContainerTitle } from '../../GlobalStyles';

export const TaskTitle = styled(ContainerTitle)`
  width: 22%;
  font-size: 19px;
`;
export const TaskContainer = styled(Container)`
  flex-direction: column;
  flex-wrap: wrap;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  width: 22%;
`;

export const Task = styled.span`
  display: flex;
  color: ${({ status }) =>
    status === 'not-available' ? '#AEB5C1' : '#242325'};
  gap: 0.5rem;
  font-weight: ${({ status }) => (status === 'active' ? '600' : '500')};
`;

export const ImageWrapper = styled.div`
  display: inline-block;
`;
