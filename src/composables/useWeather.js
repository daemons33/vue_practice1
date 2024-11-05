import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather";

const useWeather = () => {
    const temperatura = await getTemperatura();
    
};