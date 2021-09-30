import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number ,exponent =1, ...args: unknown[]): number {
    console.log(value);
    return Math.pow(value, exponent);
  }

}
