// src/components/TextBox.js
import React from 'react';

function TextBox({ value, onChange, onDelete }) {
    return (
        <div>
            <input
                type="number"
                value={value}
                onChange={onChange}
            />
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default TextBox;
