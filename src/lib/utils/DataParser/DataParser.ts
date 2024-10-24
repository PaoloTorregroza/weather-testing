import {
	WeatherIcon,
	type ExtraInfo,
	type FutureForecast,
	type TimeForecast,
	type WeatherAPIResponse
} from '$lib/types';

export class DataParser {
	getOverview(apiResponse: WeatherAPIResponse | undefined) {
		return {
			humidity: apiResponse?.current.humidity ?? 0,
			temperature: apiResponse?.current.temp_c ?? 0,
			city: apiResponse?.location.name ?? '',
			icon: this.getWeatherIcon(apiResponse)
		};
	}

	getExtra(apiResponse: WeatherAPIResponse | undefined): ExtraInfo {
		return {
			realFeel: apiResponse?.current.feelslike_c ?? 0,
			windSpeed: apiResponse?.current.wind_kph ?? 0,
			rainChance: apiResponse?.forecast.forecastday[0].day.daily_chance_of_rain ?? 0,
			UVIndex: apiResponse?.current.uv ?? 0
		};
	}

	getFutureForecast(apiResponse: WeatherAPIResponse | undefined): FutureForecast[] {
		const result: FutureForecast[] = [];
		const apiForecast = apiResponse?.forecast.forecastday ?? [];

		for (const el of apiForecast) {
			result.push({
				day: this.formatDateToDayMonth(el.date),
				dayName: this.getDayOfWeek(el.date),
				weather: el.day.condition.text,
				icon: this.getWeatherIcon(apiResponse)
			});
		}

		return result;
	}

	// The api we are using does not have hourly forecast, just fake data
	getTimeForecast(apiResponse: WeatherAPIResponse | undefined): TimeForecast[] {
		const result: TimeForecast[] = [];
		const current_temp = apiResponse?.current.temp_c ?? 0;

		for (let i = 6; i < 11; ++i) {
			result.push({
				time: i + ':00am',
				temperature: current_temp + Math.random() * 4 - 2,
				icon: this.getWeatherIcon(undefined, true)
			});
		}

		return result;
	}

	private getDayOfWeek(dateString: string): string {
		// Crea un nuevo objeto Date a partir de la cadena de fecha
		const date = new Date(dateString);

		// Array con los nombres de los días de la semana
		const daysOfWeek = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday'
		];

		// Obtiene el índice del día de la semana (0 = Domingo, 6 = Sábado)
		const dayIndex = date.getDay();

		// Devuelve el nombre del día correspondiente
		return daysOfWeek[dayIndex];
	}

	private formatDateToDayMonth(dateString: string): string {
		// Divide la cadena de la fecha en año, mes y día
		const [_, month, day] = dateString.split('-');

		// Devuelve el formato deseado DD/MM
		return `${day}/${month}`;
	}

	private getWeatherIcon(apiResponse: WeatherAPIResponse | undefined, random = false): WeatherIcon {
		if (random) {
			const values = Object.values(WeatherIcon);
			const icon = values[Math.floor(Math.random() * values.length)];
			return icon;
		} else if (apiResponse) {
			if (apiResponse.forecast.forecastday[0].day.daily_chance_of_rain > 50) {
				return WeatherIcon.Rainy;
			} else if (apiResponse.current.cloud > 50) {
				return WeatherIcon.Cloudy;
			} else {
				return WeatherIcon.Sunny;
			}
		}

		return WeatherIcon.Sunny;
	}
}
