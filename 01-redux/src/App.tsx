import { useSelector } from 'react-redux';
import './App.css';
import { Counter } from './components/Counter';
import { RootState } from './state/store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h2>Redux {count !== undefined ? count : ''}</h2>
      <Counter />
    </div>
  );
}

export default App;
