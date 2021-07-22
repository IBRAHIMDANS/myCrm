import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return {
      Name: 'CRM API',
      Version: 1.0,
      DOCUMENTATION: 'api/docs',
    };
  }
  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }
}
