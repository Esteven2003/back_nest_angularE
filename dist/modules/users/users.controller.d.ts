import { UsersService } from './users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(loginAuthDto: LoginAuthDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, registerAuthDto: RegisterAuthDto): string;
    remove(id: string): string;
}
