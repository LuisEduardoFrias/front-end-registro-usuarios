import { DepartmentDto } from "./department-dto";

export class CreateUserDto {

    name : string;
    lastName : string;
    gender : string;
    identificationCard : string;
    birthDay: Date;
    position : string;
    immediateSupervisor : string;
    departmentId: number;
    department: DepartmentDto;

    constructor(
    name : string,
    lastName : string,
    gender : string,
    identificationCard : string,
    birthDay: Date,
    position : string,
    immediateSupervisor : string,
    departmentId: number,
    department: DepartmentDto
    )
    {
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.identificationCard = identificationCard;
        this.birthDay = birthDay;
        this.position = position;
        this.immediateSupervisor = immediateSupervisor;
        this.departmentId = departmentId;
        this.department = department;
    }
}