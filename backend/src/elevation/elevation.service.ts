import { Injectable } from '@nestjs/common';
import { CreateElevationDto } from './dto/create-elevation.dto';

@Injectable()
export class ElevationService {
  private elevation: CreateElevationDto[] = [];

  countBlocks(array: number[][][]): number[][] {
    let blockArr: number[][] = [];

    array.forEach((subarray) => {
      let temp: number[] = [];

      subarray.forEach((numberArr) => {
        let count = 0;

        numberArr.reduce((max, cur, idx, scr) => {
          if (cur > max) {
            count++;
            max = cur;
          }
          return max;
        }, 0);
        temp.push(count);
      });
      blockArr.push(temp);
    });

    return blockArr;
  }

  getValuesOfSides(array: number[][]): number[][][] {
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

    return [topVirtical, rightHorizon, bottomVirtical, leftHorizon];
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
    const blocks = this.countBlocks(theSides);

    return await blocks;
  }
}
