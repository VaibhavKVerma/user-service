import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { EmailModule } from './email/email.module';
import { CommonModule } from './common/common.module';
import { SmsModule } from './sms/sms.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  controllers: [],
  imports: [
    ConfigModule,
    DatabaseModule,
    AuthModule,
    UserModule,
    EmailModule,
    CommonModule,
    SmsModule,
  ],
  providers: [],
})
export class AppModule {}
