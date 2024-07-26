import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateTaskDto {
  id: string;

  @IsNotEmpty({ message: 'The field title must not be empty' })
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsNotEmpty({ message: 'The field pomodoroCount must not be empty' })
  @Min(1, { message: 'The field pomodoroCount must be at least 1' })
  pomodoroCount: number;
}
