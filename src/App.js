import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import TextField from './components/TextField/TextField';
import H2 from './components/H2/H2';

function App() {
  return (
  <>
    <div className="App">
      <H2>Individual Activity: Part 2</H2>
      <div className="text-fields">
        <TextField variant="rounded" />
        <TextField variant="rounded" />
        <TextField variant="green" />
        <TextField variant="green" />
      </div>
      <div className="buttons">
        <Button color="blue" text="Submit" />
        <Button color="red" text="Cancel" />
      </div>
      <div className="image-container">
        <div className="image-row">
          <img src="image1.png" alt="Image 1" className="image" />
          <img src="image2.png" alt="Image 2" className="image" />
        </div>
        <div className="image-row">
          <img src="image3.png" alt="Image 3" className="square-image" />
          <img src="image4.png" alt="Image 4" className="square-image" />
        </div>
      </div>
    </div>
  </>
  );
}

export default App;