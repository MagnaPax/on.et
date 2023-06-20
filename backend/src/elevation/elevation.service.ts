import { Injectable } from '@nestjs/common';
import { CreateElevationDto } from './dto/create-elevation.dto';

@Injectable()
export class ElevationService {
  private elevation: CreateElevationDto[] = [];

  getValuesOfSides(array: number[][]): number[][] {
    const rowCount = array.length;
    const columnCount = array[0].length;

    const topVirtical: number[][] = Array.from(
      { length: columnCount },
      (_, index) => array.map((row) => row[index]),
    );

    const bottomVirtical: number[][] = [...topVirtical]
      .reverse()
      .map((row) => [...row].reverse());

    const rightHorizon: number[][] = array.map((row) => row.reverse());

    const leftHorizon: number[][] = [...rightHorizon]
      .reverse()
      .map((row) => [...row].reverse());

    const newArray = [].concat(
      topVirtical,
      rightHorizon,
      bottomVirtical,
      leftHorizon,
    );

    return newArray;
  }

  makeArray(row: number, column: number): number[][] {
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

  async getBlocks(row: number, column: number): Promise<number[][]> {
    const newArray = this.makeArray(row, column);

    const theSides = this.getValuesOfSides(newArray);

    return await newArray;
  }
}
