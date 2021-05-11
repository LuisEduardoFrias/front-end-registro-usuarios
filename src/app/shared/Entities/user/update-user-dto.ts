
export class UpdateUserDto {

    id: number;
    name : string;
    lastName : string;
    gender : string;
    identificationCard : string;
    birthDay: Date;
    position : string;
    immediateSupervisor : string;
    departmentId: number;

    constructor(
    id: number,
    name : string,
    lastName : string,
    gender : string,
    identificationCard : string,
    birthDay: Date,
    position : string,
    immediateSupervisor : string,
    departmentId: number)
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
        this.departmentId = departmentId;
    }
}