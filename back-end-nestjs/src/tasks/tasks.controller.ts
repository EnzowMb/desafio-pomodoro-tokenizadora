import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './repository/task-repository';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksRepository: TasksRepository) {}

  @Post()
  async create(@Body() task: CreateTaskDto) {
    return this.tasksRepository.save(task);
  }

  @Get()
  async list() {
    return this.tasksRepository.findAll();
  }

  @Get(':id')
  async readOne(@Param('id') id: string) {
    return this.tasksRepository.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.update(+id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tasksRepository.remove(+id);
  }
}
