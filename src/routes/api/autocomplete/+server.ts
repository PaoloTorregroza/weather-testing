import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const query = url.searchParams.get('query') ?? '';

	try {
		const resp = await fetch(
			`http://api.weatherapi.com/v1/search.json?q=${query}&key=${process.env.API_KEY}`
		);

		if (!resp.ok) {
			throw new Error('Failed to fetch autocomplete suggestions');
		}

		return json(await resp.json());
	} catch (error) {
		return json({ error: error }, { status: 500 });
	}
}
