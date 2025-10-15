import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(credenciales: LoginAuthDto): {
        token: string;
    };
    register(userObj: RegisterAuthDto): RegisterAuthDto;
}
