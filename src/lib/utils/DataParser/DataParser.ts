import type { WeatherAPIResponse } from '$lib/types';

export class DataParser {
	getOverview(apiResponse: WeatherAPIResponse | undefined) {
		return {
			humidity: apiResponse?.current.humidity ?? 0,
			temperature: apiResponse?.current.temp_c ?? 0,
			city: apiResponse?.location.name ?? ''
		};
	}
}
