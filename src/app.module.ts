import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { DocsController } from './docs/docs.controller';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, TodoController, DocsController, AdminController],
  providers: [AppService],
})
export class AppModule {}
