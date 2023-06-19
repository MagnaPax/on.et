import { Controller, Get, Query } from '@nestjs/common';
import { ElevationService } from './elevation.service';
import { CreateElevationDto } from './dto/create-elevation.dto';

@Controller('elevation')
export class ElevationController {
  constructor(private elevationService: ElevationService) {}

  @Get('square')
  getNumbers(@Query() query: CreateElevationDto) {
    // query 객체는 이미 유효성 검사 및 타입 변환을 완료
    console.log(`${typeof query.row}, ${typeof query.column}`);
    return `Row: ${query.row}, Column: ${query.column}`;
  }
}
