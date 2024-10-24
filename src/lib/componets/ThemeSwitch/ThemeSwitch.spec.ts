import { fireEvent, render, screen } from '@testing-library/svelte';
import ThemeSwitch from './ThemeSwitch.svelte';

describe('ThemeSwitch component', () => {
	test('Check local storage', () => {
		render(ThemeSwitch);
		const themeToggleButton = screen.getByTestId('toggle-button');
		fireEvent.click(themeToggleButton);
		expect(localStorage.getItem('theme')).equals('dark');
		fireEvent.click(themeToggleButton);
		expect(localStorage.getItem('theme')).equals('light');
	});
});
