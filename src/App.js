import { useState } from 'react';
import './App.css';
import Header from './components/header';
function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} />
      <header className="App-header">
        <h1> {number} </h1>
        <button onClick={() => setNumber(number + 1)}>Click</button>
      </header>
    </div>
  );
}

export default App;
