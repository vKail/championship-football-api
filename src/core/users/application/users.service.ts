import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepositoryImpl } from '../infrastructure/user.repository.drizzle';
import { UserResDTO } from '../presentation/dtos/user.response.dto';
import { UserMapper } from '../infrastructure/helpers/user-mapper';
import { CreateUserDTO } from '../presentation/dtos/create-user.dto';
import { ApiResponse } from 'src/common/api-response';

@Injectable()
export class UsersService {
  constructor(private userRepo: UserRepositoryImpl) {}

  async getAll(): Promise<ApiResponse<UserResDTO[]>> {
    const users = await this.userRepo.getAll();
    return ApiResponse.success(users.map(UserMapper.toResponse));
  }

  async getById(id: number): Promise<ApiResponse<UserResDTO>> {
    const user = await this.userRepo.getById(id);
    if (!user) throw new NotFoundException('User not found');
    return ApiResponse.success(UserMapper.toResponse(user));
  }

  async create(user: CreateUserDTO): Promise<ApiResponse<UserResDTO>> {
    const userMapped = UserMapper.fromCreate(user);
    const userCreated = await this.userRepo.create(userMapped);
    return ApiResponse.success(UserMapper.toResponse(userCreated));
  }

  async update() {}

  async delete() {}
}
