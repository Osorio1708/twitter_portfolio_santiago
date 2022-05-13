import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';
@Injectable()
export class TwitterService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  async getTimeline() {
    try {
      const client = this.getTwitterClient();
      const params = { screen_name: 'nodejs' };
      return await client
        .get('statuses/user_timeline', params)
        .then((element) => {
          return element;
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      throw err;
    }
  }
  getTwitterClient() {
    const Twitter = require('twitter');
    return new Twitter({
      consumer_key: this.configService.twitter.consumer_key,
      consumer_secret: this.configService.twitter.consumer_secret,
      access_token_key: this.configService.twitter.access_token_key,
      access_token_secret: this.configService.twitter.access_token_secret,
    });
  }
}
