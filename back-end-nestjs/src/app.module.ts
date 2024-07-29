import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { FilterExceptionGlobal } from './filters/filter-exception-http-global';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [TasksModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FilterExceptionGlobal,
    },
  ],
})
export class AppModule {}
