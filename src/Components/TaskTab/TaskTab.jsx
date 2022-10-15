import React from 'react';
import { TaskContainer, TaskTitle, Task, ImageWrapper } from './TaskTabStyles';
import { Aside } from '../../GlobalStyles';
import { data } from '../../Data/data';

const TaskTab = ({ setActiveTask, activeTask }) => {
  return (
    <Aside>
      <TaskTitle>your tasks</TaskTitle>
      <TaskContainer>
        {data.map((el) => (
          <Task
            key={el.taskId}
            status={el.taskId === activeTask ? 'active' : 'non-active'}
            onClick={() => {
              if (el.status !== 'not-available') {
                setActiveTask(el.taskId);
              }
            }}
          >
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
