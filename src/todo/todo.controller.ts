import {
  Controller,
  Get,
  Req,
  Post,
  Header,
  Param,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  @Post()
  @Header('Cache-Control', 'no-store')
  async create(@Body() createTodoDto: CreateTodoDto): Promise<string> {
    return 'This action adds a new todo';
  }

  @Get()
  async findAll(
    @Query('text') text: string,
    @Query('completed') completed: boolean,
  ): Promise<string> {
    return `This action returns all todos filtered by text: ${text} and completed: ${completed}`;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    if (id) return `This action returns a #${id} todo`;

    return 'This action returns a todo without id';
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<string> {
    return `This action updates a #${id} todo`;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return `This action removes a #${id} todo`;
  }
}
