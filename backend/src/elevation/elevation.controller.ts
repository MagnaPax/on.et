import { Controller } from '@nestjs/common';
import { ElevationService } from './elevation.service';

@Controller('elevation')
export class ElevationController {
  constructor(private elevationService: ElevationService) {}
}
