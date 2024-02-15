import type { Department } from '../types/IDepartment';
import type { Employee } from '../types/IEmployee';
import type { Role } from '../types/IRole';

export const createDepartmentsRolesArrays = (
	employees: Employee[]
): [Department[], Role[]] => {
	const departments: Department[] = [];
	const roles: Role[] = [];

	employees.forEach((emp) => {
		if (!departments.some((d) => d.value === emp.departmentValue)) {
			departments.push({ value: emp.departmentValue, label: emp.department });
		}

		const roleValue = emp.role.replace(/\s+/g, '_').toLowerCase();
		if (!roles.some((r) => r.value === roleValue)) {
			roles.push({ value: roleValue, label: emp.role });
		}
	});

	return [departments, roles];
};
