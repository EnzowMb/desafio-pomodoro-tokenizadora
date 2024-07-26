import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() task: CreateTaskDto): Promise<CreateTaskDto> {
    return this.tasksService.save(task);
  }

  @Get()
  async list() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async readOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
