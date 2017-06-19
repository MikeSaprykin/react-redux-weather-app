import axios from 'axios';
import * as types from './action.types';

const API_KEY = "9d157bcc93c1d77f8f2586edee31fe00";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city, country = 'us') {

    //TODO: Find a real county code
    const url = `${ROOT_URL}&q=${city}, ${country}`;
    const request = axios.get(url);

    return {
        type: types.FETCH_WEATHER,
        payload: request
    }
}
