import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '../config/config.module';
import jwtConfig from '../config/jwt.config';

@Module({
  imports: [ConfigModule, JwtModule.registerAsync(jwtConfig.asProvider())],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
