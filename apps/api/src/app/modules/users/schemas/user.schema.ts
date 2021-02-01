import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PostUserModel } from '../../../../../../../libs/api-interfaces/src/lib/models/user/post.user.model';


export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  salt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
