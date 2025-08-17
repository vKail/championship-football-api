import {
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLE } from '../../domain/emuns/user-role.enum';
import { Type } from 'class-transformer';
import { CreatePersonDTO } from 'src/core/person/presentation/dtos/create-person.dto';

export class CreateUserDTO {
  @IsString({ message: 'The username is required' })
  @IsNotEmpty({ message: 'username is required' })
  @ApiProperty({
    description: 'The alias that the user want to use in the app',
    example: 'jdoe12',
  })
  username: string;

  @IsEnum({ message: 'The role is required' })
  @IsNotEmpty({ message: 'role is required' })
  @ApiProperty({
    description: 'The type of user',
    enum: USER_ROLE,
    example: USER_ROLE.ADMIN,
  })
  role: string;

  @IsString({ message: 'The passsword is required' })
  @IsNotEmpty({ message: 'password is required' })
  @ApiProperty({
    description: 'password for the user in the app',
    example: 'password',
  })
  password: string;

  @ValidateNested()
  @Type(() => CreatePersonDTO)
  @ApiProperty({
    description: 'The person of the user',
    type: CreatePersonDTO,
  })
  person: CreatePersonDTO;
}
