import { useState, useMemo, useCallback } from 'react';
import './App.css';
import Header from './components/header';
function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, [])

  return (
    <div className="App">
      <Header increment={increment} />
      <header className="App-header">
        <h1> {number} </h1>
      </header>

      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}



export default App;
