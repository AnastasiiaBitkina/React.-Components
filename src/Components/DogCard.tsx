import { FunctionComponent } from "react";

interface Props {
    breed: string;
}
export const DogCard: FunctionComponent<Props> = ({breed}) => {
    return (
        <div>
        <p>{breed || 'Unknown breed'}</p>
        </div>  
    );
}

export default DogCard;