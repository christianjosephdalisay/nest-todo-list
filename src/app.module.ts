import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { DocsController } from './docs/docs.controller';

@Module({
  imports: [],
  controllers: [AppController, TodoController, DocsController],
  providers: [AppService],
})
export class AppModule {}
