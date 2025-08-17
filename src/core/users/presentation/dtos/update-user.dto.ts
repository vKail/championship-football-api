import {
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLE } from '../../domain/emuns/user-role.enum';
import { Type } from 'class-transformer';
import { UpdatePersonDTO } from 'src/core/person/presentation/dtos/update-person.dto';

export class UpdateUserDTO {
  @IsString({ message: 'The username is required' })
  @IsOptional({ message: 'username is required' })
  @ApiProperty({
    description: 'The alias that the user want to use in the app',
    example: 'jdoe12',
  })
  username: string;

  @IsEnum({ message: 'The role is required' })
  @IsOptional({ message: 'role is required' })
  @ApiProperty({
    description: 'The type of user',
    enum: USER_ROLE,
    example: USER_ROLE.ADMIN,
  })
  role: string;

  @IsString({ message: 'The passsword is required' })
  @IsOptional({ message: 'password is required' })
  @ApiProperty({
    description: 'password for the user in the app',
    example: 'password',
  })
  password: string;

  @ValidateNested()
  @Type(() => UpdatePersonDTO)
  @ApiProperty({
    description: 'The person of the user',
    type: UpdatePersonDTO,
  })
  person: UpdatePersonDTO;
}
