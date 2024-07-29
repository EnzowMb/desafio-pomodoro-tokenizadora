import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  id: number;

  @IsNotEmpty({ message: 'The field title must not be empty' })
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty({ message: 'The field completed must not be empty' })
  completed: boolean;

  @IsDate()
  @IsNotEmpty({ message: 'The field createdAt must not be empty' })
  createdAt: Date;

  @IsNumber()
  @IsNotEmpty({ message: 'The field pomodoroCount must not be empty' })
  pomodoroCount: number;
}
