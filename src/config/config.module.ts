import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import postgresConfig from './database/postgres.config';
import accessTokenJwtConfig from './jwt/acess-token-jwt.config';
import refreshTokenJwtConfig from './jwt/refresh-token-jwt.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [postgresConfig, accessTokenJwtConfig, refreshTokenJwtConfig],
    }),
  ],
})
export class ConfigModule {}
