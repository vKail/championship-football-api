import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLE } from '../../domain/emuns/user-role.enum';
import { Type } from 'class-transformer';
import { PersonResDTO } from 'src/core/person/presentation/dtos/person.response.dto';

export class UserResDTO {
  @ApiProperty({
    description: 'The id of the user',
  })
  id: number;

  @ApiProperty({
    description: 'The username of the user',
    example: 'jdoe12',
  })
  username: string;

  @ApiProperty({
    description: 'The role of the user',
    example: USER_ROLE.USER,
  })
  role: USER_ROLE;

  @Type(() => PersonResDTO)
  @ApiProperty({
    description: 'The person data of the user',
    type: PersonResDTO,
  })
  person: PersonResDTO;
}
