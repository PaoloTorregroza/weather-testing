// src/mocks/weatherApiResponse.ts
import type { WeatherAPIResponse } from '$lib/types';
import { faker } from '@faker-js/faker';

export const mockWeatherApiResponse = (): WeatherAPIResponse => ({
	location: {
		name: faker.location.city(),
		region: faker.location.state(),
		country: faker.location.country(),
		lat: faker.location.latitude(),
		lon: faker.location.longitude(),
		tz_id: faker.location.timeZone(),
		localtime_epoch: Math.floor(Date.now() / 1000),
		localtime: new Date().toISOString()
	},
	current: {
		last_updated_epoch: Math.floor(Date.now() / 1000),
		last_updated: new Date().toISOString(),
		temp_c: faker.number.float({ min: -10, max: 35 }),
		temp_f: faker.number.float({ min: 10, max: 95 }),
		is_day: faker.number.int({ min: 0, max: 1 }),
		condition: {
			text: faker.lorem.word(),
			icon: faker.image.url(),
			code: faker.number.int()
		},
		wind_mph: faker.number.float({ min: 0, max: 30 }),
		wind_kph: faker.number.float({ min: 0, max: 50 }),
		wind_degree: faker.number.int({ min: 0, max: 360 }),
		wind_dir: faker.lorem.word(2),
		pressure_mb: faker.number.float({ min: 950, max: 1050 }),
		pressure_in: faker.number.float({ min: 28, max: 32 }),
		precip_mm: faker.number.float({ min: 0, max: 20 }),
		precip_in: faker.number.float({ min: 0, max: 10 }),
		humidity: faker.number.int({ min: 0, max: 100 }),
		cloud: faker.number.int({ min: 0, max: 100 }),
		feelslike_c: faker.number.float({ min: -10, max: 40 }),
		feelslike_f: faker.number.float({ min: 14, max: 104 }),
		windchill_c: faker.number.float({ min: -10, max: 35 }),
		windchill_f: faker.number.float({ min: 10, max: 95 }),
		heatindex_c: faker.number.float({ min: -10, max: 35 }),
		heatindex_f: faker.number.float({ min: 10, max: 95 }),
		dewpoint_c: faker.number.float({ min: 10, max: 95 }),
		dewpoint_f: faker.number.float({ min: 10, max: 95 }),
		vis_km: faker.number.float({ min: 0, max: 20 }),
		vis_miles: faker.number.float({ min: 0, max: 12 }),
		uv: faker.number.float({ min: 0, max: 10 }),
		gust_mph: faker.number.float({ min: 0, max: 40 }),
		gust_kph: faker.number.float({ min: 0, max: 60 })
	},
	forecast: {
		forecastday: [
			{
				date: new Date().toISOString().split('T')[0],
				date_epoch: Math.floor(Date.now() / 1000),
				day: {
					maxtemp_c: faker.number.float({ min: 15, max: 30 }),
					maxtemp_f: faker.number.float({ min: 59, max: 86 }),
					mintemp_c: faker.number.float({ min: 5, max: 15 }),
					mintemp_f: faker.number.float({ min: 41, max: 59 }),
					avgtemp_c: faker.number.float({ min: 10, max: 25 }),
					avgtemp_f: faker.number.float({ min: 50, max: 77 }),
					maxwind_mph: faker.number.float({ min: 0, max: 20 }),
					maxwind_kph: faker.number.float({ min: 0, max: 32 }),
					totalprecip_mm: faker.number.float({ min: 0, max: 10 }),
					totalprecip_in: faker.number.float({ min: 0, max: 4 }),
					totalsnow_cm: faker.number.float({ min: 0, max: 5 }),
					avgvis_km: faker.number.float({ min: 0, max: 20 }),
					avgvis_miles: faker.number.float({ min: 0, max: 12 }),
					avghumidity: faker.number.int({ min: 20, max: 100 }),
					daily_will_it_rain: faker.number.int({ min: 0, max: 1 }),
					daily_chance_of_rain: faker.number.int({ min: 0, max: 100 }),
					daily_will_it_snow: faker.number.int({ min: 0, max: 1 }),
					daily_chance_of_snow: faker.number.int({ min: 0, max: 100 }),
					condition: {
						text: faker.lorem.word(),
						icon: faker.image.url(),
						code: faker.number.int()
					},
					uv: faker.number.float({ min: 0, max: 10 })
				},
				astro: {
					sunrise: '06:00 AM',
					sunset: '06:30 PM',
					moonrise: '07:00 PM',
					moonset: '05:30 AM',
					moon_phase: 'Waxing Crescent',
					moon_illumination: faker.number.int({ min: 0, max: 100 }),
					is_moon_up: faker.number.int({ min: 0, max: 1 }),
					is_sun_up: faker.number.int({ min: 0, max: 1 })
				},
				hour: Array.from({ length: 24 }, () => ({
					time_epoch: Math.floor(Date.now() / 1000),
					time: new Date().toISOString(),
					temp_c: faker.number.float({ min: -5, max: 35 }),
					temp_f: faker.number.float({ min: 23, max: 95 }),
					is_day: faker.number.int({ min: 0, max: 1 }),
					condition: {
						text: faker.lorem.word(),
						icon: faker.image.url(),
						code: faker.number.int()
					},
					wind_mph: faker.number.float({ min: 0, max: 30 }),
					wind_kph: faker.number.float({ min: 0, max: 50 }),
					wind_degree: faker.number.int({ min: 0, max: 360 }),
					wind_dir: faker.lorem.word(2),
					pressure_mb: faker.number.float({ min: 950, max: 1050 }),
					pressure_in: faker.number.float({ min: 28, max: 32 }),
					precip_mm: faker.number.float({ min: 0, max: 20 }),
					precip_in: faker.number.float({ min: 0, max: 10 }),
					snow_cm: faker.number.float({ min: 0, max: 5 }),
					humidity: faker.number.int({ min: 0, max: 100 }),
					cloud: faker.number.int({ min: 0, max: 100 }),
					feelslike_c: faker.number.float({ min: -10, max: 40 }),
					feelslike_f: faker.number.float({ min: 14, max: 104 }),
					windchill_c: faker.number.float({ min: -10, max: 35 }),
					windchill_f: faker.number.float({ min: 10, max: 95 }),
					heatindex_c: faker.number.float({ min: -10, max: 35 }),
					heatindex_f: faker.number.float({ min: 10, max: 95 }),
					dewpoint_c: faker.number.float({ min: 10, max: 95 }),
					dewpoint_f: faker.number.float({ min: 10, max: 95 }),
					will_it_rain: faker.number.int({ min: 0, max: 100 }),
					will_it_snow: faker.number.int({ min: 0, max: 100 }),
					chance_of_snow: faker.number.int({ min: 0, max: 100 }),
					chance_of_rain: faker.number.int({ min: 0, max: 100 }),
					vis_km: faker.number.float({ min: 0, max: 20 }),
					vis_miles: faker.number.float({ min: 0, max: 12 }),
					uv: faker.number.float({ min: 0, max: 10 }),
					gust_mph: faker.number.float({ min: 0, max: 40 }),
					gust_kph: faker.number.float({ min: 0, max: 60 })
				}))
			}
		]
	}
});
