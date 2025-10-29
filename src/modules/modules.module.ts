import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CategoriaModule } from './categoria/categoria.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [UsersModule, AuthModule, CategoriaModule, PersonaModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class ModulesModule {}
