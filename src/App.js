
import './App.css';

//Components
import { Counter } from './components/Counter';
import InputHookArrays from './components/InputHookArrays';
import InputHookObjects from './components/InputHookObjects';
import TodoList from './components/TodoList';
import TodoListV2 from './components/TodoListV2'

function App() {
  return (
    <div className="App" >
      <Counter />
      <InputHookObjects />
      <InputHookArrays />
      <TodoList />
      <TodoListV2 />
    </div>
  );
}

export default App;
