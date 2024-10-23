import { fireEvent, render, screen } from '@testing-library/svelte';
import ThemeSwitch from './ThemeSwitch.svelte';

describe('ThemeSwitch component', () => {
	test('Switch to dark mode', () => {
		const { container } = render(ThemeSwitch);
		const themeToggleButton = screen.getByTestId('toggle-button');
		fireEvent.click(themeToggleButton);
		const darkElements = screen.getAllBy.querySelectorAll('.dark');
		expect(darkElements.length).toBe(1);
	});
});
