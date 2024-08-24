import { Component } from '@angular/core';
import jsSHA from 'jssha';

@Component({
  selector: 'app-totp-generator',
  templateUrl: './totp-generator.component.html',
  styleUrl: './totp-generator.component.css'
})
export class TotpGeneratorComponent {
  secret: string = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'; // Example base32 encoded secret key
  algorithm: any= 'SHA-1'; // Default algorithm
  totpCode: string = '';
  interval: number = 30; // Time step in seconds
  digits: number = 6; // Length of the TOTP code
  errorMessage: string = '';

  generateTOTP(): void {
    try {
      const time = Math.floor(Date.now() / 1000 / this.interval);
      this.totpCode = this.generateTotpCode(this.secret, time, this.algorithm, this.digits);
      this.errorMessage = '';
    } catch (error: any) {
      this.errorMessage = 'Error generating TOTP: ' + error.message;
      this.totpCode = '';
    }
  }

  generateTotpCode(secret: string, time: number, algorithm: any, digits: number): string {
    const key = this.base32ToHex(secret);
    const timeHex = this.leftPad(this.decimalToHex(time), 16, '0');
    const hmac = new jsSHA(algorithm, 'HEX');
    hmac.setHMACKey(key, 'HEX');
    hmac.update(timeHex);
    const hmacResult = hmac.getHMAC('HEX');

    const offset = this.hexToDec(hmacResult.substring(hmacResult.length - 1));
    const binary =
      (this.hexToDec(hmacResult.substring(offset * 2, offset * 2 + 8)) & 0x7fffffff) + '';

    const otp = (binary).slice(binary.length - digits);
    return this.leftPad(otp, digits, '0');
  }

  base32ToHex(base32: string): string {
    const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let bits = '';
    let hex = '';

    for (let i = 0; i < base32.length; i++) {
      const val = base32Chars.indexOf(base32.charAt(i).toUpperCase());
      bits += this.leftPad(val.toString(2), 5, '0');
    }

    for (let i = 0; i + 4 <= bits.length; i += 4) {
      const chunk = bits.substring(i, i + 4);
      hex += parseInt(chunk, 2).toString(16).toUpperCase();
    }

    return hex;
  }

  leftPad(str: string, length: number, padChar: string): string {
    while (str.length < length) {
      str = padChar + str;
    }
    return str;
  }

  decimalToHex(decimal: number): string {
    return (decimal).toString(16).toUpperCase();
  }

  hexToDec(hex: string): number {
    return parseInt(hex, 16);
  }
}
