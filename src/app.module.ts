import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { AuthModule } from './core/auth/auth.module';
import { UsersService } from './core/users/application/users.service';
import { UsersController } from './core/users/presentation/users.controller';
import { UsersModule } from './core/users/users.module';
import { UserRepositoryImpl } from './core/users/infrastructure/user.repository.drizzle';

@Module({
  imports: [DrizzleModule, AuthModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, UserRepositoryImpl],
})
export class AppModule {}
