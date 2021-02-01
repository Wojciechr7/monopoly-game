import { IsEmail, IsString, Length } from 'class-validator';
import { PostUserModel } from '../../../../../../../libs/api-interfaces/src/lib/models/user/post.user.model';
import { UniqueValue } from '../../../common/validators/custom-validators/unique-email.validator';

export class RegisterUserDto implements PostUserModel {

  @IsString()
  @Length(5, 20)
  @UniqueValue('users')
  login: string;

  @IsString()
  @Length(6, 50)
  password: string;

  @IsEmail()
  @UniqueValue('users')
  email: string;
}
