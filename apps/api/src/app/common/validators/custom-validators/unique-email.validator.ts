import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import { UserRepositoryService } from '../../../modules/users/repositories/user-repository/user-repository.service';
import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueValueConstraint implements ValidatorConstraintInterface {

  constructor(@InjectConnection() private connection: Connection) {}

  validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
    return this.connection.collection(validationArguments.constraints[0])
      .findOne({[validationArguments.property]: value}).then(v => {
        return !v;
      })
  }
}

export function UniqueValue(collection: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: {
        ...validationOptions,
        message: `${propertyName} is already taken`
      },
      constraints: [collection],
      validator: UniqueValueConstraint,
    });
  };
}
