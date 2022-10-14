import React from 'react';
import { TaskContainer, TaskTitle, Task, ImageWrapper } from './TaskTabStyles';
import { Aside } from '../../GlobalStyles';
import { data } from '../../Data/data';

const TaskTab = () => {
  return (
    <Aside>
      <TaskTitle>your tasks</TaskTitle>
      <TaskContainer>
        {data.map((el, index) => (
          <Task key={index} status={el.status}>
            <ImageWrapper>
              <img src={el.image} alt="" />
            </ImageWrapper>

            {el.title}
          </Task>
        ))}
      </TaskContainer>
    </Aside>
  );
};

export default TaskTab;
