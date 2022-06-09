import { User } from "../types/user";

export interface UserDao{
    createUser() :void;
    getUserById(id: string): User|undefined;
    getUserByEmail(email: string): User|undefined;
    getUserByUsername(username: string): User|undefined;
    UpdateUserPassword(id: string): void;
}