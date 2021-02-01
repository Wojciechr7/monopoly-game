import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRepositoryService } from '../../repositories/user-repository/user-repository.service';
import { LoginUserDto } from '../../dto/login-user.dto';
import { User, UserDocument } from '../../schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenPayloadModel } from '../../../../../../../../libs/api-interfaces/src/lib/models/user/token-payload.model';
import { refreshSecret } from '../../../../../../settings';
import { LoginUserResponseModel } from '../../../../../../../../libs/api-interfaces/src/lib/models/user/login-user-response.model';
import { Response } from 'express';
import * as moment from 'moment';
import { RefreshTokenPayloadModel } from '../../../../../../../../libs/api-interfaces/src/lib/models/user/refresh-token-payload.model';

@Injectable()
export class AuthService {

  constructor(
    private userRepository: UserRepositoryService,
    private jwtService: JwtService
  ) {
  }

  async loginUser(credentials: LoginUserDto): Promise<LoginUserResponseModel> {
    const user: UserDocument = await this.validateCredentials(credentials);
    if (user === null) {
      throw new UnauthorizedException('User does not exists');
    }

    if (!await this.verifyPassword(credentials.password, user)) {
      throw new UnauthorizedException('User does not exists');
    }

    const token = await this.getToken(user);
    const refresh = await this.getRefreshToken(user, credentials.rememberUser);

    return {
      token,
      refresh
    }
  }

  async refreshToken(token: string): Promise<LoginUserResponseModel> {
    const tokenParsed: RefreshTokenPayloadModel = this.jwtService.decode(token) as RefreshTokenPayloadModel;
    const user = await this.userRepository.getByLogin(tokenParsed.id);

    const newToken = await this.getToken(user);
    const refresh = await this.getRefreshToken(user, tokenParsed.rememberUser);

    return {
      token: newToken,
      refresh
    }
  }

  setTokenCookie(res: Response, token: string) {
    const expires = moment().add(7, 'days').toDate();

    res.cookie('token', token, {
      httpOnly: true,
      expires
    });
  }

  private async validateCredentials ({loginOrEmail}: LoginUserDto): Promise<UserDocument | null> {
    const byEmail = await this.userRepository.getByEmail(loginOrEmail);

    if (byEmail !== null) {
      return byEmail
    }
    const byLogin = await this.userRepository.getByLogin(loginOrEmail)

    if(byLogin) {
      return byLogin
    }

    return null;
  }

  private async verifyPassword(password: string, user: UserDocument): Promise<boolean> {
    const hash = await bcrypt.hash(password, user.salt);
    return hash === user.password;
  }

  private async getToken(user: UserDocument): Promise<string> {
    const payload: TokenPayloadModel  = {login: user.login, id: user._id}
    return await this.jwtService.signAsync(payload);
  }

  private async getRefreshToken(user: UserDocument, rememberUser: boolean): Promise<string> {
    const payload: RefreshTokenPayloadModel = {id: user._id, rememberUser}
    return await this.jwtService.signAsync(payload, {secret: refreshSecret, expiresIn: rememberUser? '48h': '1h'});
  }

}
