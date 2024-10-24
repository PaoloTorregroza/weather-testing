export interface TimeForecast {
	time: string;
	temperature: number;
}

export interface ExtraInfo {
	realFeel: number;
	windSpeed: number;
	rainChance: number;
	UVIndex: number;
}

export interface FutureForecast {
	dayName: string;
	weather: string;
	day: string;
}
