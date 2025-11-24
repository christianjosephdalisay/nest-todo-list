import { Controller, Get, Req, Post, Header, Param } from '@nestjs/common';

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

  @Get(':id')
  findOne(@Param('id') id: string): string {
    if (id) {
      console.log('ID: ', id);

      return `This action returns a #${id} todo`;
    }

    return 'This action returns a todo without id';
  }
}
