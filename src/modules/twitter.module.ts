import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { TwitterService } from '../services/twitter.service';
import { TwitterController } from '../controllers/twitter.controller';

@Module({
  controllers: [TwitterController],
  providers: [TwitterService],
  exports: [TwitterService],
})
export class TwitterModule {}
