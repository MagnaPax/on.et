import { Controller, Get, Query } from '@nestjs/common';
import { ElevationService } from './elevation.service';

@Controller('elevation')
export class ElevationController {
  constructor(private elevationService: ElevationService) {}

  @Get('square')
  getNumbers(@Query('row') nOfRaw: number, @Query('column') nOfColumn: number) {
    // return `${nOfRaw}, ${nOfColumn}`;
    return this.elevationService.getBlocks(nOfRaw, nOfColumn);
  }
}
