import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import postgresConfig from '../config/database/postgres.config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync(postgresConfig.asProvider()),
  ],
})
export class DatabaseModule {}
