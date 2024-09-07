import { Component } from '@angular/core';

@Component({
  selector: 'app-base64-encoder-decoder',
  templateUrl: './base64-encoder-decoder.component.html',
  styleUrl: './base64-encoder-decoder.component.css'
})
export class Base64EncoderDecoderComponent {
  rawText: string = '';
  base64Encoded: string = '';
  base64Decoded: string = '';
  errorMessage: string | null = null;

  // Encode text to Base64
  encodeToBase64() {
    try {
      this.errorMessage = null;
      this.base64Encoded = btoa(this.rawText); // btoa encodes to Base64
    } catch (error) {
      this.errorMessage = 'Error encoding text to Base64';
    }
  }

  // Decode Base64 to text
  decodeFromBase64() {
    try {
      this.errorMessage = null;
      this.base64Decoded = atob(this.base64Encoded); // atob decodes from Base64
    } catch (error) {
      this.errorMessage = 'Invalid Base64 string';
    }
  }

  // Automatically encode the text when user enters input
  onRawTextChange() {
    this.encodeToBase64();
  }

  // Automatically decode the Base64 text when user modifies it
  onBase64EncodedChange() {
    this.decodeFromBase64();
  }
}
