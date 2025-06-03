import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() data: LoginUserDto) {}

  @Post('register')
  register(@Body() data: RegisterUserDto) {
    return data;
  }

  // @Post('logout')
  // logout(@Body() data: LogoutUserDto) {}
  //
  // @Post('forgot-password')
  // forgotPassword(@Body() data: ForgotUserPasswordDto) {}
}
