import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from '../../repositories/user-repository/user-repository.service';
import { RegisterUserDto } from '../../dto/register-user.dto';
import { PasswordHashInterface } from '../../interfaces/password-hash.interface';
import * as bcrypt from 'bcrypt';
import { User } from '../../schemas/user.schema';

@Injectable()
export class UserService {

  constructor(
    private userRepository: UserRepositoryService
  ) {
  }

  async addUser(user: RegisterUserDto): Promise<User> {
    const hash = await this.hashPassword(user.password);

    return await this.userRepository.addUser({
      ...user,
      ...hash,
    })
  }

  private async hashPassword(password: string): Promise<PasswordHashInterface> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    return {
      hash,
      salt
    }

  }


}
