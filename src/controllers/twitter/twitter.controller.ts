import { Controller, Get } from '@nestjs/common';

import { TwitterService } from '../../services/twitter/twitter.service';

@Controller('twitter')
export class TwitterController {
  constructor(private twitterService: TwitterService) {}
  @Get()
  getTimeline() {
    return 'Twitter controller';
  }
}
