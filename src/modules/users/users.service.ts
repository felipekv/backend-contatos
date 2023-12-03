import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.prisma.user.findFirst({
      where: { email: createUserDto.email },
    });
    if (findUser) {
      throw new ConflictException('User already exists.');
    }
    const user = new User();
    Object.assign(user, { ...createUserDto });
    await this.prisma.user.create({
      data: { ...user },
    });
    return plainToInstance(User, user);
  }

  async findAll() {
    const findUsers = await this.prisma.user.findMany();
    return plainToInstance(User, findUsers);
  }

  async findOne(id: string) {
    const findUser = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!findUser) {
      throw new NotFoundException('User not found.');
    }
    return plainToInstance(User, findUser);
  }

  async findByEmail(email: string) {
    const findUser = await this.prisma.user.findUnique({
      where: { email },
    });
    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!findUser) {
      throw new NotFoundException('User not found.');
    }
    const updateUser = await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });
    return plainToInstance(User, updateUser);
  }

  async remove(id: string) {
    const findUser = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!findUser) {
      throw new NotFoundException('User not found.');
    }
    await this.prisma.user.delete({ where: { id } });
  }
}
