import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatePortfolioDto } from 'src/dto/porfolio.dto';
import { Portfolio } from 'src/models/portfolio';
import { PortfolioService } from 'src/services/portfolio.service';
import { RenderPortfolio } from 'src/views/portfolio';
@Controller('portfolio')
export class PortfolioController {
  constructor(private portfolioService: PortfolioService) {}
  @Get('/list')
  getListPortfolios() {
    return this.portfolioService.getPorfolioList();
  }
  @Post()
  postPortfolio(@Body() payload: CreatePortfolioDto) {
    return this.portfolioService.savePortfolio(payload);
  }
  @Get(':id')
  getPortfolioById(@Param('id') id: string) {
    const data = this.portfolioService.getPortfolioById(id);
    const render = new RenderPortfolio(data);
    return render.sendScreen();
  }
  @Get('delete/:id')
  deletePortfolio(@Param('id') id: string) {
    return this.portfolioService.deletePortfolio(id);
  }
}
