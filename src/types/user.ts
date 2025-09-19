export interface IUser {
    name: string;
    email: string;
    username: string;
    role: TUserRole;
    _id: string;
    createdAt: string;
    updatedAt: string;  
    profileIamge?:string
}

export type TUserRole = "PLAYER" | "ADMIN";       