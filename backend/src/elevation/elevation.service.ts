import { Injectable } from '@nestjs/common';
import { CreateElevationDto } from './dto/create-elevation.dto';

@Injectable()
export class ElevationService {
  private elevation: CreateElevationDto[] = [];
}
