import { persons, users } from 'src/db/schema';
import { UserEntity } from '../../domain/user.entity';
import { PersonEntity } from 'src/core/person/domain/person.entity';
import { roleBDtoDomain } from './role-mapper';
import { UserResDTO } from '../../presentation/dtos/user.response.dto';
import { CreateUserDTO } from '../../presentation/dtos/create-user.dto';

export class UserMapper {
  static fromPersistence(
    row: typeof users.$inferSelect & { person: typeof persons.$inferSelect }
  ): UserEntity {
    if (!row.person) throw new Error('Person data must exist');
    const person = PersonEntity.rebuild({
      id: row.person.id,
      dni: row.person.dni,
      name: row.person.name,
      surname: row.person.surname,
      birthdate: new Date(row.person.birthdate),
      email: row.person.email,
    });
    return UserEntity.rebuild({
      id: row.id,
      person: person,
      role: roleBDtoDomain[row.role],
      username: row.username,
      password: row.password,
    });
  }

  static toPersistence(user: UserEntity): typeof users.$inferInsert {
    return {
      username: user.username,
      password: user.password,
      person_id: user.person.id,
      role: user.role,
    };
  }

  static toResponse(entity: UserEntity): UserResDTO {
    return {
      id: entity.id,
      username: entity.username,
      role: entity.role,
      person: {
        id: entity.person.id,
        dni: entity.person.dni,
        name: entity.person.name,
        surname: entity.person.surname,
        birthdate: entity.person.birthdate,
        email: entity.person.email,
      },
    };
  }

  static fromCreate(createDto: CreateUserDTO): UserEntity {
    const person = PersonEntity.create({
      dni: createDto.person.dni,
      name: createDto.person.name,
      surname: createDto.person.surname,
      birthdate: new Date(createDto.person.birthdate),
      email: createDto.person.email,
    });
    return UserEntity.create({
      person: person,
      role: roleBDtoDomain[createDto.role],
      username: createDto.username,
      password: createDto.password,
    });
  }
}
