import type { WeatherAPIResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Guatavita&days=7';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'f9a14d1568msh476cf13d425aea6p10617ajsnb85360560087',
			'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
		}
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
