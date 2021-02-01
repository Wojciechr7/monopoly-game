import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../../schemas/user.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class UserRepositoryService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {
  }

  async addUser(user: User): Promise<User> {
    const userCreated = new this.userModel(user);
    return userCreated.save();
  }

  async getByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async getByLogin(login: string): Promise<User> {
    return this.userModel.findOne({ login }).exec();
  }

}
