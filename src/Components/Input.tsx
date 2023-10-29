import React from 'react';
import '../Styles/input.css';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (searchQuery: string) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const { value, onChange, onSearch } = props;
  const inputValue = value;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed'); 
      onSearch(inputValue); 
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for a GIF"
        id="searchInput"
        name="searchInput"
        className="input"
      />
      <button onClick={() => onSearch(value)}>Search</button> {/* Передайте значение value при клике */}
    </div>
  );
}

export default Input;
