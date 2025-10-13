import { User } from "../../auth/interfaces/user.interface";
export declare class LoginAuthDto implements User {
    email: string;
    password: string;
}
