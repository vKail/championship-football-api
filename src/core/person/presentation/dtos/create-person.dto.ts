import { IsDate, IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDTO {
  @IsString({ message: 'dni must be a string' })
  @IsNotEmpty({ message: 'dni is required' })
  @ApiProperty({
    description: 'The dni of the person',
    example: '1905903411',
  })
  dni: string;

  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
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
  @IsNotEmpty({ message: 'birthdate is required' })
  @ApiProperty({
    description: 'The birthdate of the person',
    example: '2003-10-24',
  })
  birthdate: Date;

  @IsEmail({ message: 'email must be valid' })
  @IsNotEmpty({ message: 'email is required' })
  @ApiProperty({
    description: 'The email of the person',
    example: 'example@example.com',
  })
  email: string;
}
