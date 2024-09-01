import { Component } from '@angular/core';

@Component({
  selector: 'app-hex-string-generator',
  templateUrl: './hex-string-generator.component.html',
  styleUrl: './hex-string-generator.component.css'
})
export class HexStringGeneratorComponent {
  hexStrings: string[] = [];
  stringLen: number = 0;
  noOfOps: number = 0;

  generateHexString(): void {
    const characters = '0123456789ABCDEF';
    const charactersLength = characters.length;

    this.hexStrings = []

    for (let i = 0; i < this.noOfOps; i++) {
      let hexStr: string = "";
      for (let i = 0; i < this.stringLen; i++) {
        hexStr += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this.hexStrings.push(hexStr);
    }

    console.log("Hex String: ", this.hexStrings);
  }
}
