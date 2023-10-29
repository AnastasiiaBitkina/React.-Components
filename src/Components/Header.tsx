import { useState } from 'react';
import Input from './Input';
import '../Styles/header.css';



function Header() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  }
  return (
    <div className="header">
      <div className="input-container">
        <Input value={inputValue} onChange={handleInputChange} />
      </div>
    </div>
  )
}

export default Header;