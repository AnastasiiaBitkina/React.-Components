import { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';

interface GifData {
  data: {
    images: {
      original: {
        url: string;
      };
    }[];
  }[];
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [gifData, setGifData] = useState<GifData | null>(null);

  const API_KEY = 'ZO8VSEFzNRuoLyUghXJAd6x66oHd77PW';

  useEffect(() => {
    if (searchTerm) {
      axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`)
        .then((response) => {
          setGifData(response.data);
        })
        .catch((error) => {
          console.error('Error', error);
          setGifData(null);
        });
    } else {
      setGifData(null);
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>GIF Search</h1>
      <Input
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
      />

      {gifData ? (
        <div>
          <h2> Results "{searchTerm}":</h2>
          <div className="gif-list">
            {gifData.data.map((gif, index) => (
              <img key={index} src={gif.images.original.url} alt={`GIF ${index}`} />
            ))}
          </div>
        </div>
      ) : (
        <p>Search for GIFs</p>
      )}
    </div>
  );
}

export default App;
