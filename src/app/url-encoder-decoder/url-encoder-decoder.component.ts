import { Component } from '@angular/core';

@Component({
  selector: 'app-url-encoder-decoder',
  templateUrl: './url-encoder-decoder.component.html',
  styleUrl: './url-encoder-decoder.component.css'
})
export class UrlEncoderDecoderComponent {
  rawInput: string = '';
  encodedOutput: string = '';
  decodedOutput: string = '';
  errorMessage: string = '';

  onInputChange(): void {
    try {
      this.encodedOutput = encodeURIComponent(this.rawInput);
      this.decodedOutput = decodeURIComponent(this.rawInput);
      this.errorMessage = ''; // Clear error if everything is fine
    } catch (error) {
      this.errorMessage = 'Invalid input for decoding!';
    }
  }

  encodeUrl(): void {
    this.encodedOutput = encodeURIComponent(this.rawInput);
  }

  decodeUrl(): void {
    try {
      this.decodedOutput = decodeURIComponent(this.rawInput);
      this.errorMessage = ''; // Clear error if decoding is successful
    } catch (error) {
      this.errorMessage = 'Invalid input for decoding!';
    }
  }
}
