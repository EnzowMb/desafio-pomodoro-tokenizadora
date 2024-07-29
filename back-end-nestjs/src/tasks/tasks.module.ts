import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from 'src/database/prisma.service';
import { TasksRepository } from './repository/task-repository';

@Module({
  controllers: [TasksController],
  providers: [
    PrismaService,
    {
      provide: TasksRepository,
      useClass: TasksService,
    },
  ],
})
export class TasksModule {}
