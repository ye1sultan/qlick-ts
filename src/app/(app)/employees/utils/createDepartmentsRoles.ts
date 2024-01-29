interface Employee {
    id: number;
    name: string;
    value: string;
    label: string;
    email: string;
    phone: string;
    role: string;
    roleValue: string;
    joinDate: string;
    department: string;
    departmentValue: string;
    avatarUrl: string;
}

interface Department {
    value: string;
    label: string;
}

interface Role {
    value: string;
    label: string;
}

export const createDepartmentsRolesArrays = (employees: Employee[]): [Department[], Role[]] => {
    const departments: Department[] = [];
    const roles: Role[] = [];

    employees.forEach(emp => {
        if (!departments.some(d => d.value === emp.departmentValue)) {
            departments.push({ value: emp.departmentValue, label: emp.department });
        }

        const roleValue = emp.role.replace(/\s+/g, '_').toLowerCase();
        if (!roles.some(r => r.value === roleValue)) {
            roles.push({ value: roleValue, label: emp.role });
        }
    });

    return [departments, roles];
};