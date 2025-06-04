import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

export default registerAs(
  'refresh_token',
  (): JwtModuleOptions => ({
    signOptions: {
      algorithm: 'HS256',
      expiresIn: '60d',
    },
    global: true,
    secret: process.env.JWT_SECRET,
  }),
);
