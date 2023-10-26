import axios from 'axios';

export async function getDataFromApi() {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    return response.data;
}
