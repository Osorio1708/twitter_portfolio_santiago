import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getValues() {
    return {
      status: 'Ok',
      message: 'Server is running',
    };
  }
}
