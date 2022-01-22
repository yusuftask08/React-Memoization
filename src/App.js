import { useState, useMemo } from 'react';
import './App.css';
import Header from './components/header';
function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');
  const data = useMemo(() => {
    return calculateObject(number);
  }, [number]);
  // const data = calculateObject();
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />
      <header className="App-header">
        <h1> {number} </h1>
        <button onClick={() => setNumber(number + 1)}>Click</button>
      </header>

      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

function calculateObject(number) {
  console.log('calculating..')
  for (let i = 0; i < 100000; i++) { }
  console.log('end calculating..')

  return { name: 'Yusuf Taskiran', number }

}

export default App;
