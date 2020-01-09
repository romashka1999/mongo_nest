enum Gender {
    'MALE',
    'FEMALE',
    'OTHER'
}

export interface IcreateUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender?: Gender
}