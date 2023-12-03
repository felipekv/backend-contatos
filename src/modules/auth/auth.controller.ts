import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('Authorization')
  @Post()
  async login(@Body() user: LoginDto) {
    return this.authService.login(user.email, user.password);
  }
}
