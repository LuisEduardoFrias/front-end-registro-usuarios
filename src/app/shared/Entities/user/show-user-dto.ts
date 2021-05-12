import { DepartmentDto } from "../department/department-dto";
import { CreateUserDto } from "./create-user-dto";

export class ShowUserDto implements CreateUserDto {

    id: number;    
    name: string;
    lastName: string;
    gender: string;
    identificationCard: string;
    birthDay: Date;
    position: string;
    immediateSupervisor: string;
    departmentId: number;
    department: DepartmentDto;
    departmentName: string;

    constructor(
        id: number,
        name: string,
        lastName: string,
        gender: string,
        identificationCard: string,
        birthDay: Date,
        position: string,
        immediateSupervisor: string,
        departmentId: number,
        department: DepartmentDto)
    {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.identificationCard = identificationCard;
        this.birthDay = birthDay;
        this.position = position;
        this.immediateSupervisor = immediateSupervisor;
        this.departmentId = departmentId;
        this.department = department;
        this.departmentName = department.name;
    }

}