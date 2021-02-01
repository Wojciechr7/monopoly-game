import { LoginUserModel } from '../../../../../../../libs/api-interfaces/src/lib/models/user/login-user.model';
import { IsBoolean } from 'class-validator';

export class LoginUserDto implements LoginUserModel {

  loginOrEmail: string;

  password: string;

  @IsBoolean()
  rememberUser: boolean;

}
