import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';
@Injectable()
export class DynamoDbService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private AWS: any,
    private dynamoClient: any,
    private tableName: string,
  ) {
    this.AWS = require('aws-sdk');
  }

  initConection() {
    this.AWS.config.update({
      region: this.configService.AWS.region,
      accessKeyId: this.configService.AWS.accessKeyId,
      secretAccessKey: this.configService.AWS.secretAccessKey,
    });
    this.dynamoClient = new this.AWS.DynamoDB.DocumentClient();
    this.tableName = 'portfolio';
  }

  async getAllPortfolios() {
    const params = {
      TableName: this.tableName,
    };
    return await this.dynamoClient.scan(params).promise();
  }

  async addOrUpdatePortfolio(portfolio) {
    const params = {
      TableName: this.tableName,
      Item: portfolio,
    };
    await this.dynamoClient.put(params).promise();
  }
  async getPortfolioById(id) {
    const params = {
      TableName: this.tableName,
      hey: {
        id,
      },
    };
    return await this.dynamoClient.get(params).promise();
  }
  async deletePorfolioById(id) {
    const params = {
      TableName: this.tableName,
      hey: {
        id,
      },
    };
    return await this.dynamoClient.delete(params).promise();
  }
}
