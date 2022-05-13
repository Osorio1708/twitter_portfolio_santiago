import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterModule } from './modules/twitter.module';
import { PortfolioService } from './services/portfolio.service';
import { PortfolioController } from './controllers/portfolio.controller';
import { PortfolioModule } from './modules/portfolio.module';
import config from './config';
@Module({
  imports: [
    TwitterModule,
    PortfolioModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
