enum GenderEnum {
    'MALE',
    'FEMALE',
    'OTHER'
}

export class createUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly gender: GenderEnum
}