import { Module } from '@nestjs/common';
import { PortfolioController } from '../controllers/portfolio.controller';
import { DynamoDbService } from '../services/dynamo-db.service';
import { PortfolioService } from '../services/portfolio.service';
import { TwitterService } from '../services/twitter.service';

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService, TwitterService, DynamoDbService],
  exports: [PortfolioService, TwitterService, DynamoDbService],
})
export class PortfolioModule {}
