import { Module } from '@nestjs/common';
import { PortfolioController } from 'src/controllers/portfolio.controller';
import { DynamoDbService } from 'src/services/dynamo-db.service';
import { PortfolioService } from 'src/services/portfolio.service';
import { TwitterService } from 'src/services/twitter.service';

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService, TwitterService, DynamoDbService],
  exports: [PortfolioService, TwitterService, DynamoDbService],
})
export class PortfolioModule {}
