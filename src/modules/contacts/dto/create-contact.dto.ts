import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'Contact name',
    type: String,
    example: 'Felipe',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Contact email',
    type: String,
    example: 'felipe@mail.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contact phone',
    type: String,
    example: '+55 (00) 91234-5678',
  })
  @IsString()
  phone: string;
}
