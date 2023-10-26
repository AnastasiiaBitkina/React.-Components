import { FunctionComponent, useState, useEffect } from "react";
import { getDataFromApi }  from './apiFunctions'

interface Props {
    breed: string;
}

export const DogCard: FunctionComponent<Props> = () => {
    const [randomBreeds, setRandomBreeds] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataFromApi(); 
                const breeds = Object.keys(data.message);
                const randomIndexes = Array.from({ length: 5 }, () => Math.floor(Math.random() * breeds.length));
                const selectedBreeds = randomIndexes.map(index => breeds[index]);
                setRandomBreeds(selectedBreeds);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <h2>Random Breeds:</h2>
            <ul>
                {randomBreeds.map((breed, index) => (
                    <li key={index}>{breed || 'Unknown breed'}</li>
                ))}
            </ul>
        </div>
    );
}

export default DogCard;