import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'jsonFormatter'
})
export class JsonFormatterPipe implements PipeTransform {

  transform(value: any): string {
    return JSON.stringify(value, null, 2); // Pretty-print JSON with 2-space indentation
  }

}
