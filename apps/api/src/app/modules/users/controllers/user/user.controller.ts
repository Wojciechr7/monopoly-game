import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterUserDto } from '../../dto/register-user.dto';
import { UserService } from '../../services/user/user.service';
import { UserRepositoryService } from '../../repositories/user-repository/user-repository.service';
import { OptionAvailableEnum } from '../../../../../../../../libs/api-interfaces/src/lib/enums/common/option-available.enum';

@Controller('user')
export class UserController {

  constructor(
    private userService: UserService,
    private userRepository: UserRepositoryService
  ) {
  }

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto): Promise<any> {
    return await this.userService.addUser(registerUserDto);
  }

  @Get('checkEmailAvailability/:email')
  async checkEmailAvailability(@Param ('email') email: string): Promise<OptionAvailableEnum> {
    const v = await this.userRepository.getByEmail(email)
    return v ? OptionAvailableEnum.NotAvailable: OptionAvailableEnum.Available;
  }

  @Get('checkLoginAvailability/:login')
  async checkLoginAvailability(@Param('login') login: string) : Promise<OptionAvailableEnum> {
    const v = await this.userRepository.getByLogin(login);

    return v ? OptionAvailableEnum.NotAvailable: OptionAvailableEnum.Available;
  }




}
