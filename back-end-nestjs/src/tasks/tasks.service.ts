import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async save(task: CreateTaskDto) {
    return await this.prisma.task.create({
      data: {
        title: task.title,
        description: task.description,
        completed: task.completed,
        createdAt: task.createdAt,
        pomodoroCount: task.pomodoroCount,
      },
      select: {
        id: true,
        title: true,
        description: true,
        completed: true,
        createdAt: true,
        pomodoroCount: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.prisma.task.update({
      where: { id },
      data: {
        title: updateTaskDto.title,
        description: updateTaskDto.description,
        completed: updateTaskDto.completed,
        createdAt: updateTaskDto.createdAt,
        pomodoroCount: updateTaskDto.pomodoroCount,
      },
      select: {
        id: true,
        title: true,
        description: true,
        completed: true,
        createdAt: true,
        pomodoroCount: true,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.task.delete({ where: { id } });
  }
}
