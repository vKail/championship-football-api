import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { UserRepositoryImpl } from './infrastructure/user.repository.drizzle';
import { UsersController } from './presentation/users.controller';
import { DrizzleModule } from 'src/drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  providers: [UsersService, UserRepositoryImpl],
  controllers: [UsersController],
  exports: [UsersService, UserRepositoryImpl],
})
export class UsersModule {}
