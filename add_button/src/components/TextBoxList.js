// src/components/TextBoxList.js
import React from 'react';
import TextBox from './TextBox';

function TextBoxList({ textBoxes, onTextBoxChange, onDeleteTextBox }) {
    return (
        <div>
            {textBoxes.map((value, index) => (
                <TextBox
                    key={index}
                    value={value}
                    onChange={(e) => onTextBoxChange(index, e)}
                    onDelete={() => onDeleteTextBox(index)}
                />
            ))}
        </div>
    );
}

export default TextBoxList;
