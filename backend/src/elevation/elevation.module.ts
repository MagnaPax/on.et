import { Module } from '@nestjs/common';
import { ElevationController } from './elevation.controller';

@Module({
  controllers: [ElevationController]
})
export class ElevationModule {}
