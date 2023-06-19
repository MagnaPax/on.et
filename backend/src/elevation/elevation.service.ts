import { Injectable } from '@nestjs/common';
import { CreateElevationDto } from './dto/create-elevation.dto';

@Injectable()
export class ElevationService {
  private elevation: CreateElevationDto[] = [];

  makeArray(row: number, column: number) {
    const resultArray: number[][] = [];

    for (let i = 0; i < row; i++) {
      const subArray: number[] = [];
      for (let j = 0; j < column; j++) {
        let numberElement;
        do {
          numberElement = Math.floor(Math.random() * column) + 1;
        } while (subArray.includes(numberElement));
        subArray.push(numberElement);
      }
      resultArray.push(subArray);
    }
    return resultArray;
  }

  async getBlocks(row: number, column: number) {
    const newArray = this.makeArray(row, column);
    return await newArray;
  }
}
