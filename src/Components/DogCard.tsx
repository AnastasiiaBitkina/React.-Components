import { FunctionComponent } from "react";
//import { useEffect, useState } from 'react';
import ApiComponent from './ApiComponent';

interface Props {
    breed: string;
}

export const DogCard: FunctionComponent<Props> = () => {
   /* const [randomBreed, setRandomBreed] = useState<string | null>('');

    useEffect(() => {

        const breeds = ApiComponent.getDataFromApi(); 
        const randomIndex = Math.floor(Math.random() * breeds.length);
        setRandomBreed(breeds[randomIndex]);
    }, []);*/

    return (
        <div>
        <p>{<ApiComponent /> || 'Unknown breed'}</p>
        </div>  
    );
}

export default DogCard;