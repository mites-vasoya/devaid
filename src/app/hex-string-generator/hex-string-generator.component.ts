import { Component } from '@angular/core';

@Component({
  selector: 'app-hex-string-generator',
  templateUrl: './hex-string-generator.component.html',
  styleUrl: './hex-string-generator.component.css'
})
export class HexStringGeneratorComponent {
  hexStrings: string[] = ["QQQQQQ"];
  stringLen: number | undefined;
  noOfOps: number | undefined;

  generateHexString(): void {

    if(this.stringLen == undefined || this.noOfOps == undefined || this.stringLen == 0 || this.noOfOps == 0 || this.stringLen > 20 || this.stringLen > 20) {
      alert("String Length and No. Of Output should be greater than 0 and less than 20");
      return ;
    }

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
