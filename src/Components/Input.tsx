import React, { ChangeEvent } from 'react';
import '../Styles/input.css';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  

  return (
    <div>
      <input
        className='input'
        type='text'
        value={value}
        onChange={handleInputChange}
        placeholder='Enter breed'
      />
       <button className="search-button">Search!</button>
    </div>

  );
};

export default Input;
