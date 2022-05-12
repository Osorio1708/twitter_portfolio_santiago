import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getValues() {
    return {
      status: 'Ok',
      message: 'Server is running',
    };
  }
}
