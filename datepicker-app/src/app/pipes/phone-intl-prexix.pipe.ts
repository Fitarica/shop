import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneIntlPrexix'
})
export class PhoneIntlPrexixPipe implements PipeTransform {

  transform(value: string, location: string): string {
    const prefixMap: { [key: string]: string } = {
      'France': '+33',
      'Italy': '+39',
      'Switzerland': '+41',
      'Germany': '+49',
    };

    const prefix = prefixMap[location] || '+';
    
    return `${prefix} ${value}`;
  }

}
