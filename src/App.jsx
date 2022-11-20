import { useState } from 'react';
import vivamariana from './assets/vivamariana.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src={vivamariana} />
      </div>
    </div>
  );
}

export default App;
