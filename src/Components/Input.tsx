import React, { useState, ChangeEvent } from 'react';
import '../Styles/input.css'

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      className='input'
      type='text'
      value={inputValue}
      onChange={handleInputChange}
      placeholder='Enter breed'
    />
  );
};

export default Input;
