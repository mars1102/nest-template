import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() data: UserCreateDto) {
    console.log(data);
    return await this.userService.create({
      ...data,
      id: 'id_123',
      logs: [],
      roles: [],
    });
  }
}
