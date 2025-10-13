import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
export declare class UsersService {
    create(loginAuthDto: LoginAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, registerAuthDto: RegisterAuthDto): string;
    remove(id: number): string;
}
