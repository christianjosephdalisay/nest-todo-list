export class UpdateTodoDto {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: Date;
  completedAt?: Date;
}
