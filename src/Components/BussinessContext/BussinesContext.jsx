import React, { useState } from 'react';
import {
  BussinessContainer,
  BussinessTitle,
  TitleContainer,
  NotificationContainer,
  BussinessContextBig,
  Notification,
} from './BussinessContextStyles';
import { Section } from '../../GlobalStyles';
import Tab from '../../Icons/Tab.svg';
import { data } from '../../Data/data';

const BussinesContext = () => {
  const [active, setActive] = useState();

  return (
    <Section>
      <BussinessTitle>
        <TitleContainer>
          <img src={Tab} alt="" width={16} />
          Bussiness context
        </TitleContainer>
      </BussinessTitle>
      <BussinessContainer>
        <NotificationContainer>
          {data.map((el) => (
            <>
              {el.bussinessContext.map((element, index) => (
                <Notification key={index} active={active}>
                  {element.bussinessTitle}
                </Notification>
              ))}
            </>
          ))}
        </NotificationContainer>
        <BussinessContextBig>Test</BussinessContextBig>
      </BussinessContainer>
    </Section>
  );
};

export default BussinesContext;
