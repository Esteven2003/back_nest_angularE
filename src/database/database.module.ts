import { Module } from '@nestjs/common';
import { databaseProvider } from "./database.providers";
import { ConfigService } from 'src/config/config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports:[ConfigModule],
    providers:[...databaseProvider, ConfigService],
    exports: [...databaseProvider]
})
export class DatabaseModule {
    
}
