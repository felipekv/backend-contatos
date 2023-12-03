import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Account email',
    type: String,
    default: 'test@email.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Account password',
    type: String,
    default: '12345678',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
