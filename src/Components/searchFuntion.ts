import { GifData } from "./apiFunctions";

export async function getDataFromApi(searchQuery: string): Promise<GifData | null> {
  try {
    const apiKey = 'ZO8VSEFzNRuoLyUghXJAd6x66oHd77PW';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (data && Array.isArray(data.data) && data.data.length > 0) {
      const gifData = data.data[0]; 
      const gifUrl = gifData.images.original.url;
      
     
      return {
        data: [
          {
            images: [
              {
                original: {
                  url: gifUrl,
                },
              },
            ],
          },
        ],
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error loading data', error);
    return null;
  }
}
