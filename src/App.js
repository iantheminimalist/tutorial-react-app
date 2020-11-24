
import './App.css';

//Components
import { Counter } from './components/Counter';
import InputHookArrays from './components/InputHookArrays';
import InputHookObjects from './components/InputHookObjects';

function App() {
  return (
    <div className="App" >
      <Counter />
      <InputHookObjects />
      <InputHookArrays />
    </div>
  );
}

export default App;
