import { DepartmentDto } from "../department/department-dto";

export class ShowUserDto {

    id: number;
    departmentName: string;

    constructor(id: number, Departmant: DepartmentDto)
    {
        this.id = id;
        this.departmentName = Departmant.name;
    }
}