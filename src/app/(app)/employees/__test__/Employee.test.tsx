import { render, screen } from '@testing-library/react';
import EmployeeRow from '../Employee';

const mockEmployee = {
    id: 1,
    name: 'John Doe',
    label: 'Employee',
    email: 'john.doe@example.com',
    phone: '1234567890',
    role: 'Developer',
    joinDate: '2022-01-01',
    department: 'Engineering',
    departmentValue: 'engineering',
    avatarUrl: 'https://example.com/avatar.jpg',
    value: 'employee',
};

describe('EmployeeRow', () => {
    it('renders employee name', () => {
        render(<EmployeeRow employee={mockEmployee} />);
        const nameElement = screen.getByText(mockEmployee.name);
        expect(nameElement).toBeInTheDocument();
    });

    it('renders employee email', () => {
        render(<EmployeeRow employee={mockEmployee} />);
        const emailElement = screen.getByText(mockEmployee.email);
        expect(emailElement).toBeInTheDocument();
    });

    it('renders employee phone', () => {
        render(<EmployeeRow employee={mockEmployee} />);
        const phoneElement = screen.getByText(mockEmployee.phone);
        expect(phoneElement).toBeInTheDocument();
    });

    it('renders employee role', () => {
        render(<EmployeeRow employee={mockEmployee} />);
        const roleElement = screen.getByText(mockEmployee.role);
        expect(roleElement).toBeInTheDocument();
    });

    it('renders formatted join date', () => {
        render(<EmployeeRow employee={mockEmployee} />);
        const joinDateElement = screen.getByText('1 January 2022');
        expect(joinDateElement).toBeInTheDocument();
    });

    it('renders employee department', () => {
        render(<EmployeeRow employee={mockEmployee} />);
        const departmentElement = screen.getByText(mockEmployee.department);
        expect(departmentElement).toBeInTheDocument();
    });
});