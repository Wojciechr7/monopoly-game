import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://zul:zulopoli@hshelper-lmkdk.azure.mongodb.net/test?retryWrites=true&w=majority'),
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
