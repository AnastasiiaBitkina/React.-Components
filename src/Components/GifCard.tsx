import { useEffect, useState } from "react";
import { getDataFromApi } from './apiFunctions'

interface GifData {
    data: {
      images: {
        original: {
          url: string;
        };
      };
    }[];
  }

export const GifCard = () => {
    const [gifs, setData] = useState<GifData>({ data: [] });

    useEffect(() => {
        console.log("hi")
        getDataFromApi().then(data => {
            setData(data);
        })
    }, []);


    return (
        <div>
            <h2>Random Gif</h2>
            <ul>
                {gifs.data.map((gif, index) => {
                    return (<div key={index}>
                      <h3>Title</h3>
                    <img src= {gif.images.original.url} alt="" />  
                    </div>)
                })
                }
            </ul>
        </div>
    );
}

export default GifCard;