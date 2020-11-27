
import './App.css';

//Components
import { Counter } from './components/Counter';
import InputHookArrays from './components/InputHookArrays';
import InputHookObjects from './components/InputHookObjects';
import TodoList from './components/TodoList';
import TodoListV2 from './components/TodoListV2';
import CounterV2 from './components/reducer/CounterV2';
import InputReducer from './components/reducer/InputReducer';

function App() {
  return (
    <div className="App" >
      <Counter />
      <InputHookObjects />
      <InputHookArrays />
      <TodoList />
      <TodoListV2 />
      <CounterV2 />
      <InputReducer />
    </div>
  );
}

export default App;
