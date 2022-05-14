import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import config from '../config';
import { PortfolioModule } from '../modules/portfolio.module';
import { PortfolioController } from '../controllers/portfolio.controller';
import { DynamoDbService } from '../services/dynamo-db.service';
import { CreatePortfolioDtoHelper, idHelper } from './helper';
describe('PortfolioController', () => {
  let controller: PortfolioController;
  let dynamoDBService: DynamoDbService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PortfolioModule,
        ConfigModule.forRoot({
          envFilePath: '.env',
          load: [config],
          isGlobal: true,
        }),
      ],
    }).compile();
    dynamoDBService = module.get<DynamoDbService>(DynamoDbService);
    controller = module.get<PortfolioController>(PortfolioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('getListPortfolios must get array of portfolios in DB', async () => {
    const result = await controller.getListPortfolios();
    expect(typeof result).toBe('object');
    expect(result.data.length).toBeGreaterThan(0);
    expect(typeof result.data[0].id).toBe('string');
  });

  it('postPortfolio must create row in DB', () => {
    jest
      .spyOn(dynamoDBService, 'addOrUpdatePortfolio')
      .mockImplementation(async () => {
        Promise.resolve({}) as unknown as Promise<any>;
        const response = await controller.postPortfolio(
          CreatePortfolioDtoHelper,
        );
        console.log(response);
        expect(typeof response.data.id).toBe('string');
        expect(response.code).toBe(200);
      });
  });

  it('getPortfolioById must get portfolio from DB', async () => {
    const response = await controller.getPortfolioById(idHelper);
    expect(response.includes(`<section class="container-fluid">`)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
  });

  it('getPortfolioById must return "User doesnt exist"', async () => {
    const response = await controller.getPortfolioById('00000');
    expect(response.includes(`<h1>User doesnt exist</h1>`)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
  });

  it('deletePortfolio must delete portfolio in DB', () => {
    jest
      .spyOn(dynamoDBService, 'deletePorfolioById')
      .mockImplementation(async () => {
        Promise.resolve({}) as unknown as Promise<any>;
        const response = await controller.deletePortfolio(idHelper);
        expect(typeof response.data.id).toBe('string');
        expect(response.code).toBe(200);
      });
  });
});
