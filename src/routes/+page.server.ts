import type { WeatherAPIResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const key = process.env.API_KEY;
	const url = 'http://api.weatherapi.com/v1/forecast.json?q=Guatavita&days=7&key=' + key;
	const options = {
		method: 'GET'
	};
	try {
		const response = await fetch(url, options);
		const result: WeatherAPIResponse = await response.json();
		return {
			result
		};
	} catch (error) {
		console.error(error);
	}
};
