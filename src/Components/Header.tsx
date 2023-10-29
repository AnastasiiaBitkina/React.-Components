import  { useState } from 'react';
import Input from './Input';
import { getDataFromApi } from './apiFunctions'; 
import '../Styles/input.css';


function Header() {
  const [inputValue, setInputValue] = useState('');
  const [gifUrl, setGifUrl] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSearch = async (searchQuery: string) => { 
    console.log('Searching for:', searchQuery);
    const gifData = await getDataFromApi(searchQuery);

    if (gifData) {
      const firstGifUrl = gifData.data[0]?.images[0]?.original.url;
      setGifUrl(firstGifUrl);
    } else {
      setGifUrl('');
    }
  };

  return (
    <div className="header">
      <div className="input-container">
        <Input value={inputValue} onChange={handleInputChange} onSearch={handleSearch} />
      </div>
      {gifUrl && <img src={gifUrl} alt="GIF" />}
    </div>
  )
}

export default Header;

