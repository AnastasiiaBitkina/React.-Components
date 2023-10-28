
export async function getDataFromApi() {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZO8VSEFzNRuoLyUghXJAd6x66oHd77PW')
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading data');
        return [];
    }
}
export interface GifData {
  data: {
    images: {
      original: {
        url: string;
      };
    }[];
  }[];
}
