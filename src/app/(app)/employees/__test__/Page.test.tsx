import { render, screen } from '@testing-library/react';
import Employees from '../page';

const employeeLength = 10;

describe('Employees', () => {
    it('renders the heading', () => {
        render(<Employees />);

        const headingElement = screen.getByTestId("employee-heading");

        expect(headingElement).toBeInTheDocument();
    });

    it('renders the employee count', () => {
        render(<Employees />);

        const employeeCountElement = screen.getByTestId("employee-count");

        expect(employeeCountElement).toBeInTheDocument();
    });

    it('renders the employee rows', () => {
        render(<Employees />);

        const employeeRowElements = screen.getAllByTestId('employee-row');

        expect(employeeRowElements.length).toBe(employeeLength);
    });
});