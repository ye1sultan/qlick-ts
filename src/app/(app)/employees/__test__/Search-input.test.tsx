import { fireEvent, render, screen } from '@testing-library/react';
import { SearchInput } from '../search-input';
import ResizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserver;

const mockEmployees = [
    {
        id: 1,
        name: 'John Doe',
        value: 'employee1',
        label: 'Employee',
        email: 'john.doe@example.com',
        phone: '1234567890',
        role: 'Developer',
        roleValue: 'developer',
        joinDate: '2022-01-01',
        department: 'Engineering',
        departmentValue: 'engineering',
        avatarUrl: 'https://example.com/avatar.jpg',
    }
];

describe('SearchInput', () => {
    it('renders search button', () => {
        render(
            <SearchInput
                employees={mockEmployees}
                value=""
                setValue={() => { }}
                selectedEmployees={null}
                setSelectedEmployees={() => { }}
            />
        );

        const searchButton = screen.getByRole('combobox');
        expect(searchButton).toBeInTheDocument();
    });

    it('renders search input after search button is clicked', () => {
        render(
            <SearchInput
                employees={mockEmployees}
                value=""
                setValue={() => { }}
                selectedEmployees={null}
                setSelectedEmployees={() => { }}
            />
        );

        const searchButton = screen.getByRole('combobox');
        fireEvent.click(searchButton);

        const searchInput = screen.getByPlaceholderText(/Search an/i);
        expect(searchInput).toBeInTheDocument();
    });

    it('renders employee name when value is selected', () => {
        render(
            <SearchInput
                employees={mockEmployees}
                value="employee1"
                setValue={() => { }}
                selectedEmployees={mockEmployees}
                setSelectedEmployees={() => { }}
            />
        );

        const searchButton = screen.getByRole('combobox');
        fireEvent.click(searchButton);

        const employeeName = screen.getByText('John Doe');
        expect(employeeName).toBeInTheDocument();
    });

    it('renders department name when value is selected', () => {
        render(
            <SearchInput
                employees={mockEmployees}
                value="engineering"
                setValue={() => { }}
                selectedEmployees={mockEmployees}
                setSelectedEmployees={() => { }}
            />
        );

        const searchButton = screen.getByRole('combobox');
        fireEvent.click(searchButton);

        const departmentName = screen.getByText('Engineering');
        expect(departmentName).toBeInTheDocument();
    });

    it('renders role name when value is selected', () => {
        render(
            <SearchInput
                employees={mockEmployees}
                value="developer"
                setValue={() => { }}
                selectedEmployees={mockEmployees}
                setSelectedEmployees={() => { }}
            />
        );

        const searchButton = screen.getByRole('combobox');
        fireEvent.click(searchButton);

        // Use getAllByText and check if one of the elements contains the expected text
        const roleNames = screen.getAllByText('Developer');
        expect(roleNames.some(roleName => roleName.textContent === 'Developer')).toBeTruthy();
    });

    it('renders search results when value is entered', async () => {
        render(
            <SearchInput
                employees={mockEmployees}
                value="john"
                setValue={() => { }}
                selectedEmployees={null}
                setSelectedEmployees={() => { }}
            />
        );

        const searchButton = screen.getByRole('combobox');
        fireEvent.click(searchButton);

        const searchResults = await screen.findByText(/john doe/i);
        expect(searchResults).toBeInTheDocument();
    });
});