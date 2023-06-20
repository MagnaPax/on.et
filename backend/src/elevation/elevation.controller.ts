import { Controller, Get, Query } from '@nestjs/common';
import { ElevationService } from './elevation.service';
import { CreateElevationDto } from './dto/create-elevation.dto';

@Controller('elevation')
export class ElevationController {
  constructor(private elevationService: ElevationService) {}

  @Get('square')
  getNumberOfShownBlocks(
    @Query() query: CreateElevationDto,
  ): Promise<[number[][], number[][]]> {
    // query 객체는 이미 유효성 검사 및 타입 변환을 완료
    return this.elevationService.getNumberOfShownBlocks(
      query.row,
      query.column,
    );
  }
}
