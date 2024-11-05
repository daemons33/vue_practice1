import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-16.5&longitude=-68.15&hourly=temperature_2m';

export const getTemperatura = async() => {
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.hourly.temperature_2m[0];
    return nuevaTemperatura;
};