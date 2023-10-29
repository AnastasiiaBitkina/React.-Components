import { useEffect, useState } from 'react';
import axios from 'axios';

interface DataItem {
    message: string
}

function ApiComponent() {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then((response) => {
                setData(response.data.message); 
            })
            .catch((error) => {
                console.error('Error loading data:', error);
            });
    }, []);

    return (
        <div>
            <h1>DogApi</h1>
            <ul>
                {Object.keys(data).map((breed) => (
                    <li key={breed}>{breed}</li>
                ))}
            </ul>
        </div>
    );
}

export default ApiComponent;
