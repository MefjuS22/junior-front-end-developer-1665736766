import GlobalStyle, { Wrapper } from './GlobalStyles';
import TaskTab from './Components/TaskTab/TaskTab.jsx';
import Navbar from './Components/Navabr/Navbar';
import BussinesContext from './Components/BussinessContext/BussinesContext';
import { useState } from 'react';
import Logo from './Icons/logo.svg';
import Footer from './Components/Footer/Footer';

function App() {
  const [activeTask, setActiveTask] = useState(1);
  return (
    <>
      <Navbar logo={Logo}></Navbar>
      <Wrapper>
        <GlobalStyle />
        <TaskTab setActiveTask={setActiveTask} activeTask={activeTask} />
        <BussinesContext activeTask={activeTask}></BussinesContext>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}

export default App;
