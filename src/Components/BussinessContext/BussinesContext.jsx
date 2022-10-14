import React, { useState } from 'react';
import {
  BussinessContainer,
  BussinessTitle,
  TitleContainer,
  NotificationContainer,
  BussinessContextBig,
  Notification,
  NotificationTitle,
  NotificationContent,
  NotificationData,
  NotificationNew,
  BussinessContextTitle,
  BussinessContent,
  BussinessAuthor,
  BussinessDate,
} from './BussinessContextStyles';
import { Section } from '../../GlobalStyles';
import Tab from '../../Icons/Tab.svg';
import { data } from '../../Data/data';

const BussinesContext = () => {
  const [active, setActive] = useState();
  const [read, setRead] = useState([]);
  const [activeContext, setActiveContext] = useState(
    data.find((value) => value.active)
  );

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
          {activeContext.bussinessContext.map((element) => (
            <Notification
              read={
                active !== element.id && read.indexOf(element.id) !== -1
                  ? true
                  : false
              }
              key={element.id}
              active={active === element.id ? true : false}
              onClick={() => {
                setActive(element.id);
                setRead((read) => [...read, element.id]);
              }}
            >
              <NotificationData>
                <NotificationNew
                  isNew={element.isNew && read.indexOf(element.id) === -1}
                >
                  new
                </NotificationNew>
                {element.author} •{' '}
                {
                  new Date(`${element.created_at}`)
                    .toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                    .split(',')[1]
                }
              </NotificationData>
              <NotificationTitle
                isNew={element.isNew && read.indexOf(element.id) === -1}
              >
                {element.bussinessTitle}
              </NotificationTitle>
              <NotificationContent>{element.content}</NotificationContent>
            </Notification>
          ))}
        </NotificationContainer>

        {activeContext.bussinessContext
          .filter((element) => element.id === active)
          .map((element) => (
            <BussinessContextBig key={element.id}>
              <BussinessContextTitle>
                {element.bussinessTitle}
              </BussinessContextTitle>
              <BussinessAuthor> {element.author}</BussinessAuthor>
              <BussinessDate>
                {' '}
                •
                {
                  new Date(`${element.created_at}`)
                    .toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                    .split(',')[1]
                }
              </BussinessDate>
              <BussinessContent>{element.content}</BussinessContent>
            </BussinessContextBig>
          ))}
      </BussinessContainer>
    </Section>
  );
};

export default BussinesContext;
