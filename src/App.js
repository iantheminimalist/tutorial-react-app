
import './App.css';

//Components
import { Counter } from './components/Counter';
import InputHookArrays from './components/InputHookArrays';
import InputHookObjects from './components/InputHookObjects';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App" >
      <Counter />
      <InputHookObjects />
      <InputHookArrays />
      <TodoList />
    </div>
  );
}

export default App;
