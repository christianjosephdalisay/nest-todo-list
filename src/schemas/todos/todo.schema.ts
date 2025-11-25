import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ required: true })
  text: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ type: Date, default: null })
  dueDate: Date | null;

  @Prop({ type: Date, default: null })
  completedAt: Date | null;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
