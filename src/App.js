import { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('black');

  const changeColor = (colorText) => {
    if (colorText.target.value == '') {
      setColor(color);
    } else {
      setColor(colorText.target.value);
      console.log(colorText.target.value)
    }
  }




  return (
    <div className="App">
      <div style={{ backgroundColor: color, height: "150px", width: 'auto' }} className='square' />
      <input type={'text'} placeholder='Enter Color' onChange={(color) => changeColor(color)} />
    </div>
  );
}

export default App;
