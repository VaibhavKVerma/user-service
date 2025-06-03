import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

export default registerAs(
  'jwt',
  (): JwtModuleOptions => ({
    signOptions: {
      algorithm: 'HS256',
      expiresIn: '2d',
    },
    global: true,
    secret: process.env.JWT_SECRET,
  }),
);
