import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatePortfolioDto } from 'src/dto/porfolio.dto';
import { PortfolioService } from 'src/services/portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private portfolioService: PortfolioService) {}
  @Post()
  getPortfoliobyId(@Body() payload: CreatePortfolioDto) {
    return this.portfolioService.savePortfolio(payload);
  }
  @Get(':id')
  getPortfolioById(@Param('id') id: string) {
    return this.portfolioService.getPortfolioById(id);
  }
  @Get('delete/:id')
  deletePortfolio(@Param('id') id: string) {
    return this.portfolioService.deletePortfolio(id);
  }
}
