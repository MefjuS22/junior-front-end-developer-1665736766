import GlobalStyle, { Wrapper } from './GlobalStyles';
import TaskTab from './Components/TaskTab/TaskTab.jsx';
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <TaskTab />
    </Wrapper>
  );
}

export default App;
