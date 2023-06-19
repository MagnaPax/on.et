import { IsInt, Min, Max, ArrayUnique } from 'class-validator';

export class CreateElevationDto {
  @IsInt({ message: 'Column value must be an integer.' })
  @Min(1, { message: 'Column value must be greater than or equal to 1.' })
  @Max(Number.MAX_SAFE_INTEGER, { message: 'Column value is too large.' })
  column: number;

  @IsInt({ message: 'Row value must be an integer.' })
  @Min(1, { message: 'Row value must be greater than or equal to 1.' })
  @Max(Number.MAX_SAFE_INTEGER, { message: 'Row value is too large.' })
  row: number;

  @ArrayUnique({
    message: 'ShownBlocks array cannot contain duplicate values.',
  })
  shownBlocks: number[];
}
