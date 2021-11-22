import axios from 'axios';

export default async function fetchData() {
    const response = await axios.get('https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=netherlands&limit=20&api_key=f2ab12a57fcca396592451123c0c3ba1&format=json')
    return response;
}