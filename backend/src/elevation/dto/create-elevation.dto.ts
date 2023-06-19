import { Min, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateElevationDto {
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  column: number;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  row: number;
}
