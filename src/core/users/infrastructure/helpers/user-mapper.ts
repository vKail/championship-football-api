import { persons, users } from 'src/db/schema';
import { UserEntity } from '../../domain/user.entity';
import { PersonEntity } from 'src/core/person/domain/person.entity';
import { roleBDtoDomain } from './role-mapper';
import { UserResDTO } from '../../presentation/dtos/user.response.dto';
import { CreateUserDTO } from '../../presentation/dtos/create-user.dto';

export class UserMapper {
  static fromPersistence(
    row: typeof users.$inferSelect & { person: typeof persons.$inferSelect },
  ): UserEntity {
    const person =
      row.person &&
      new PersonEntity(
        row.person.id,
        row.person.dni,
        row.person.name,
        row.person.surname,
        new Date(row.person.birthdate),
        row.person.email,
      );

    return new UserEntity(
      row.id,
      person,
      roleBDtoDomain[row.role],
      row.username,
      row.password,
    );
  }

  static toPersistence(user: UserEntity): typeof users.$inferInsert {
    return {
      username: user.username,
      password: user.password,
      person_id: user.person._id,
      role: user.role,
    };
  }

  static toResponse(entity: UserEntity): UserResDTO {
    return {
      id: entity.id,
      username: entity.username,
      role: entity.role,
      person: {
        id: entity.person._id,
        dni: entity.person._dni,
        name: entity.person._name,
        surname: entity.person._surename,
        birthdate: entity.person._birthdate,
        email: entity.person._email,
      },
    };
  }

  static fromCreate(createDto: CreateUserDTO): UserEntity {
    return new UserEntity(
      null,
      new PersonEntity(
        null,
        createDto.person.dni,
        createDto.person.name,
        createDto.person.surname,
        new Date(createDto.person.birthdate),
        createDto.person.email,
      ),
      roleBDtoDomain[createDto.role],
      createDto.username,
      createDto.password,
    );
  }
}
