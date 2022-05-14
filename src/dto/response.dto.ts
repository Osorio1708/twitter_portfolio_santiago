import { PartialType } from '@nestjs/swagger';
export class ResponseBase {
  status: string;
  code: number;
  message: string;
  data?: any;
}
