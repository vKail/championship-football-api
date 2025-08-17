import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePersonDTO {
  @IsString({ message: 'name must be a string' })
  @IsOptional()
  @ApiProperty({
    description: 'The name of the person',
    example: 'Jhon',
  })
  name: string;

  @IsString({ message: 'surname must be a string' })
  @IsNotEmpty({ message: 'surname is required' })
  @ApiProperty({
    description: 'The surname of the person',
    example: 'Doe',
  })
  surname: string;

  @IsDate({ message: 'birthdate must be a date' })
  @IsOptional()
  @ApiProperty({
    description: 'The birthdate of the person',
    example: '24-10-2003',
  })
  birthdate: number;
}
