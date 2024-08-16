import { Component } from '@angular/core';

@Component({
  selector: 'app-hex-string-generator',
  templateUrl: './hex-string-generator.component.html',
  styleUrl: './hex-string-generator.component.css'
})
export class HexStringGeneratorComponent {
  hexString: string = '';

  generateHexString(length: number = 8): void {
    let result = '';
    const characters = '0123456789ABCDEF';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.hexString = result;
  }
}
