import { Body, Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import { LoginUserModel } from '../../../../../../../../libs/api-interfaces/src/lib/models/user/login-user.model';
import { AuthService } from '../../services/auth/auth.service';
import { LoginUserResponseModel } from '../../../../../../../../libs/api-interfaces/src/lib/models/user/login-user-response.model';
import { RefreshTokenDto } from '../../dto/refresh-token.dto';
import {Response} from 'express';
import * as moment from 'moment';

@Controller('auth')
export class AuthController {

  private static get cookieExpires(): Date {
    return moment().add(7, 'days').toDate()
  }

  constructor(
    private authService: AuthService
  ) {
  }

  @Post('login')
  @HttpCode(200)
  async loginUser(@Body() user: LoginUserModel, @Res({passthrough: true}) response: Response): Promise<LoginUserResponseModel> {
    const payload = await this.authService.loginUser(user);

    this.authService.setTokenCookie(response, payload.token);
    return payload;
  }

  @Post('refreshToken')
  @HttpCode(200)
  async refreshToken(@Body() {refreshToken}: RefreshTokenDto, @Res({passthrough: true}) response: Response): Promise<LoginUserResponseModel> {
    const payload = await this.authService.refreshToken(refreshToken);
    this.authService.setTokenCookie(response, payload.token);

    return payload;
  }
}
