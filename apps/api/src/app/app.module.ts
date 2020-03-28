import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './modules/chat/chat.module';
import { connectionString } from '../assets/connection';

@Module({
  imports: [
    MongooseModule.forRoot(connectionString),
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
