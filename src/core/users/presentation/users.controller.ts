import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../application/users.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all users',
  })
  async getAll() {
    return this.userService.getAll();
  }
}
