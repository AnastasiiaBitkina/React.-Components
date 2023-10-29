import { useEffect, useState } from "react";
import Pagination from './Pagination';
import { getDataFromApi, GifData } from './apiFunctions';



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


    return (
        <div>
            <Pagination gifs={gifs} />
        </div>
    );

};

export default GifCard2;