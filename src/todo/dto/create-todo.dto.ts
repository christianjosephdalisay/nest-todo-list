export class CreateTodoDto {
  text: string;
  completed: boolean;
  dueDate?: Date;
  completedAt?: Date;
}
