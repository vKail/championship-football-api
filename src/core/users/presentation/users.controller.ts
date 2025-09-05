import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from '../application/users.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDTO } from './dtos/create-user.dto';

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

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by the id' })
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a user',
  })
  async create(@Body() user: CreateUserDTO) {
    return this.userService.create(user);
  }
}
