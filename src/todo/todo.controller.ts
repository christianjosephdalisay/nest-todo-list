import {
  Controller,
  Get,
  Req,
  Post,
  Header,
  Redirect,
  Query,
} from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Post()
  @Header('Cache-Control', 'no-store')
  create(): string {
    return 'This action adds a new todo';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all todos';
  }
}
