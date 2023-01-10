import './App.css';
import Button from './components/Button';
import Contador from './components/Counter';
import { useState } from 'react';

function App() {
 
  const [numClicks, setNumClicks] = useState(0);
    

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  }

  const resetCounter = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <Contador numClicks={numClicks} />
      <Button
        text='Click'
        isButtonClick= {true}
        handleClick= {handleClick}
      />
     <Button
        text='Restart'
        isButtonClick= {false}
        handleClick= {resetCounter}
      />
    </div>
  );
}

export default App;
