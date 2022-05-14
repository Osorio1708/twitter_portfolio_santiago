import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import config from '../config';
import { TwitterModule } from '../modules/twitter.module';
import { TwitterController } from '../controllers/twitter.controller';

describe('TwitterController', () => {
  let controller: TwitterController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TwitterModule,
        ConfigModule.forRoot({
          envFilePath: '.env',
          load: [config],
          isGlobal: true,
        }),
      ],
    }).compile();

    controller = module.get<TwitterController>(TwitterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('getTimeline must provide array of twits', async () => {
    const result = await controller.getTimeline();
    expect(typeof result).toBe('object');
    expect(result.length).toBeGreaterThan(0);
    expect(typeof result[0].user.id).toBe('number');
  });
});
