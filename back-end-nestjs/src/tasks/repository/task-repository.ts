import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

// Usando interface na injeção de dependência o NestJS não consegue realiza-lá de forma automatizada
export abstract class TasksRepository {
  abstract save(task: CreateTaskDto): Promise<CreateTaskDto>;

  abstract findAll(): Promise<CreateTaskDto[]>;

  abstract findOne(id: number): Promise<CreateTaskDto | null>;

  abstract update(id: number, task: UpdateTaskDto): Promise<CreateTaskDto>;

  abstract remove(id: number): Promise<CreateTaskDto>;

  abstract verifyTaskExists(id: number): Promise<boolean>;
}
