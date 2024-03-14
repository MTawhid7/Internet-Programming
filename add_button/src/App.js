import React, { useState } from 'react';
import './App.css';

function App() {
  const [textBoxes, setTextBoxes] = useState([0]);
  const [warning, setWarning] = useState('');

  const addTextBox = () => {
    setTextBoxes([...textBoxes, 0]);
  };

  const deleteTextBox = (index) => {
    const updatedTextBoxes = textBoxes.filter((_, i) => i !== index);
    setTextBoxes(updatedTextBoxes);
  };

  const handleInputChange = (index, event) => {
    const value = event.target.value.trim();
    if (!value.match(/^\d*$/)) {
      setWarning('Please enter numbers only.');
      return;
    }
    setWarning('');
    const updatedTextBoxes = [...textBoxes];
    updatedTextBoxes[index] = parseInt(value) || 0;
    setTextBoxes(updatedTextBoxes);
  };

  const totalSum = textBoxes.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="App">
      <h1>Dynamic Text Boxes</h1>
      <button onClick={addTextBox}>Add Text Box</button>
      {textBoxes.map((value, index) => (
        <div key={index}>
          <input
            type="text"
            value={value}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button onClick={() => deleteTextBox(index)}>Delete</button>
        </div>
      ))}
      {warning && <p className="warning">{warning}</p>}
      <p>Total Sum: {totalSum}</p>
    </div>
  );
}

export default App;
