import { ApiProperty } from '@nestjs/swagger';

export class PersonResDTO {
  @ApiProperty({
    description: 'The id of the person',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The dni of the person',
    example: '1805904511',
  })
  dni: string;

  @ApiProperty({
    description: 'The name of the person',
    example: 'Jhon',
  })
  name: string;

  @ApiProperty({
    description: 'The surname of the person',
    example: 'Doe',
  })
  surname: string;

  @ApiProperty({
    description: 'The birthdate of the person',
    example: '22-10-2003',
  })
  birthdate: Date;

  @ApiProperty({
    description: 'The email of the person',
    example: 'example@example.com',
  })
  email: string;
}
