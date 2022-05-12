import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TwitterService } from './services/twitter/twitter.service';
import { TwitterController } from './controllers/twitter/twitter.controller';

@Module({
  imports: [],
  controllers: [AppController, TwitterController],
  providers: [TwitterService],
})
export class AppModule {}
