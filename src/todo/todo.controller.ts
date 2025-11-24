import { Controller, Get, Req, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all todos';
  }
}
