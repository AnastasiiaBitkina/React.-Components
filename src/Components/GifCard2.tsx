import { useEffect, useState } from "react";
import Pagination from './Pagination';
import { getDataFromApi, GifData } from './apiFunctions';

/*interface GifData {
    data: {
        images: {
            original: {
                url: string;
            };
        };
    }[];
}*/

//export const GifCard2 = () => {
    //const [gifs, setData] = useState<GifData>({ data: [] });

    export const GifCard2: React.FC = () => {
        const [gifs, setData] = useState<GifData>({ data: [] });

    useEffect(() => {
        console.log("hi");
        getDataFromApi().then((data: GifData) => {
          console.log(1);
          setData(data);
        }).catch((error) => {
          console.error('Error loading data:', error);
        });
      }, []);

   /* useEffect(() => {
        console.log("hi")
        getDataFromApi().then(data => {
            console.log(1);
            setData(data);
        })
    }, []);*/

    return (
        <div>
            <Pagination gifs={gifs} />
        </div>
    );

    /*return (
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
            )*/};

export default GifCard2;