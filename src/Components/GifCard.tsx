import { useEffect, useState } from "react";
import { getDataFromApi } from './apiFunctions'


export const GifCard = () => {
    const [gifData, setData] = useState({ data: { images: { original: { url: "" } } } })
    useEffect(() => {
        if (typeof window !== 'undefined') {
            getDataFromApi().then(data => {
                console.log(1);
                setData(data);
            })
        }
    }, []);

    const { data } = gifData;
    const { images } = data;
    const { original } = images;
    const gifUrl = original.url;
    return (
        <div>
            <h2>Random Gif</h2>
            <ul>

                <div>
                    <h3>Title</h3>
                    <img src={gifUrl} alt="" />
                </div>

            </ul>
        </div>
    );
}

export default GifCard;