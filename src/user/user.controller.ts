import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('find_all')
  findAll() {
    return this.userService.findAll();
  }

  @Post('create')
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
