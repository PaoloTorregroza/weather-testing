import { fireEvent, render, screen } from '@testing-library/svelte';
import VerticalTabs from './VerticalTabs.svelte';

describe('VerticalTabs component', () => {
	test('should render the component', () => {
		render(VerticalTabs);
		const firstTabNode = screen.getByText(/First Tab Heading/i);
		expect(firstTabNode).toBeTruthy();
	});

	test('should switch tabs', async () => {
		render(VerticalTabs);
		const secondTabElement = screen.getByText(/Second tab/i);
		fireEvent.click(secondTabElement);
		await screen.findByText(/Second Tab Heading/i);
	});
});
