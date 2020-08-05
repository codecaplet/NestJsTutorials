import { Controller, Get, Post, HttpStatus, HttpCode, Redirect, Req, Res, Param, Put, Query, Body, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('/home')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/he*o')
  @Redirect('https://nestjs.com')
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(200)
  @Post('/cats')
  postCats(@Req() request: Request, @Res() response: Response): void {
    response.status(201).send(request.url);
  }

  @Header('Cache-Control', 'none')
  @Put('/cat/:id')
  putCat(
    @Param('id') id: string,
    @Query('name') name: string,
    @Body() body: any
  ): any {
    return body;
  }
}
