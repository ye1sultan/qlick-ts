import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
    it('have "Dashboard" text', () => {
        render(<Home />);

        const elem = screen.getByText(/dashboard/i);

        expect(elem).toBeInTheDocument();
    });

    it('have heading h1 in', () => {
        render(<Home />);

        const elem = screen.getByRole("heading", { name: "Hello, Dashboard Page!" });

        expect(elem).toBeInTheDocument();
    });
});