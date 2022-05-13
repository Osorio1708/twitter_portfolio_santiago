import { Injectable } from '@nestjs/common';
import { DynamoDbService } from './dynamo-db.service';
import { TwitterService } from './twitter.service';
import { Portfolio, Twit } from 'src/models/portfolio';
import { CreatePortfolioDto } from 'src/dto/porfolio.dto';
import { v4 as uuidv4 } from 'uuid';
import { ResponseBase } from 'src/dto/response.dto';

@Injectable()
export class PortfolioService {
  constructor(
    private readonly twitterService: TwitterService,
    private readonly dynamoDBService: DynamoDbService,
  ) {}
  async savePortfolio(data: CreatePortfolioDto) {
    let portfolio = new Portfolio();
    let response = new ResponseBase();
    try {
      portfolio = {
        id: uuidv4(),
        name: data.name,
        names: data.names,
        phone: data.phone,
        zip_code: data.zip_code,
        description: data.description,
        image_url: data.image_url,
        twitter_user_name: data.twitter_user_name,
        tittle: data.tittle,
        address: data.address,
        email: data.email,
        experience: data.experience,
        twits: [],
      };
      portfolio.twits = await this.twitterService
        .getTimeline()
        .then((response) => {
          let twits: Twit[] = [];
          for (let i = 0; i < response.length; i++) {
            const { id_str, user, text } = response[i];
            const twit: Twit = {
              id: id_str,
              user_id: user.id,
              user: user.name,
              body: text,
              url_image: user.profile_image_url,
            };
            twits.push(twit);
          }
          this.dynamoDBService.initConection();
          this.dynamoDBService.addOrUpdatePortfolio(portfolio);
          return twits;
        })
        .catch((err) => {
          throw err;
        });
      response.data = portfolio;
      response.status = 'Ok';
      response.code = 200;
      response.message = 'Portfolio was saved';
    } catch (err) {
      response.data = err;
      response.status = 'Error';
      response.code = 500;
      response.message = 'Server cant save porftolio';
    }
    return response;
  }
  async getPortfolioById(id: string) {
    let response = new ResponseBase();
    try {
      this.dynamoDBService.initConection();
      const portfolio = await this.dynamoDBService
        .getPortfolioById(id)
        .then((element) => {
          return element;
        })
        .catch((err) => {
          throw err;
        });
      response.data = portfolio;
      response.status = 'Ok';
      response.code = 200;
      response.message = 'Portfolio was saved';
      return response;
    } catch (err) {
      response.data = err;
      response.status = 'Error';
      response.code = 500;
      response.message = 'Server cant get porftolio';
      return response;
    }
  }
  async deletePortfolio(id: string) {
    let response = new ResponseBase();
    try {
      this.dynamoDBService.initConection();
      await this.dynamoDBService.deletePorfolioById(id);
      response.data = 'id';
      response.status = 'Ok';
      response.code = 200;
      response.message = 'Portfolio was deleted';
      return response;
    } catch (err) {
      response.data = err;
      response.status = 'Error';
      response.code = 500;
      response.message = 'Server cant delete porftolio';
      return response;
    }
  }
}
