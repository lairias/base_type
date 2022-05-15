export type Ind = true | false;



export interface IPeople {
    cod_user: number;
    firstName: string;
    middleName: string;
    lastName: string;
    photoProfile: string;
    photoBackground: string;
    age: number;
    birthDate: Date;
}
export interface IUser {
    cod_user: number;
    email: string;
    userName: string;
    password: string;
    _token: string;
    verifiedEmail: Ind;
    ind_usr: Ind;
    ins_usr: Ind;
}
export interface IRole{
    cod_role: number;
    nam_role: string;
    desc_role: string;
    ins_role: Ind;

}
export interface IPermission{
    cod_permission: number;
    nam_permission: string;
    desc_permission: string;
    
}
export interface IRoleHasPermission {
    cod_role: number;
    cod_permission: number;
    
}
export interface IUserHasRole {
    cod_user: number;
    cod_role: number;
    
}