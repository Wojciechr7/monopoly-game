import { Global, Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { UserRepositoryService } from './repositories/user-repository/user-repository.service';
import { CustomValidatorsModule } from '../../common/validators/custom-validatorsModule';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from '../../../../settings';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    CustomValidatorsModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '15min' },
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [UserRepositoryService, UserService, AuthService]
})
export class UsersModule {
}
