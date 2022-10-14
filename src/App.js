import GlobalStyle, { Wrapper } from './GlobalStyles';
import TaskTab from './Components/TaskTab/TaskTab.jsx';
import BussinesContext from './Components/BussinessContext/BussinesContext';
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <TaskTab />
      <BussinesContext></BussinesContext>
    </Wrapper>
  );
}

export default App;
