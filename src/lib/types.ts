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
