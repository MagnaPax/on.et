import { Controller, Get, Query } from '@nestjs/common';
import { ElevationService } from './elevation.service';
import { CreateElevationDto } from './dto/create-elevation.dto';

@Controller('elevation')
export class ElevationController {
  constructor(private elevationService: ElevationService) {}

  @Get('square')
  getNumbers(@Query() query: CreateElevationDto) {
    return this.elevationService.getBlocks(query.row, query.column);
  }
}
