import {Component} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-jsonformatter',
  templateUrl: './jsonformatter.component.html',
  styleUrl: './jsonformatter.component.css'
})
export class JSONFormatterComponent {
  jsonInput: string = '';
  jsonOutput: string = '';
  errorMessage: string = '';

  constructor(private messageService: MessageService) {
  }

  formatJson(): void {
    try {
      if(this.jsonInput != '') {
        // Parse the input JSON and then stringify it with indentation
        const parsedJson = JSON.parse(this.jsonInput);
        this.jsonOutput = JSON.stringify(parsedJson, null, 2);
        this.errorMessage = '';
      }

    } catch (error) {
      // Handle any JSON parsing errors
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid JSON format. Please check your input.' });
      this.jsonOutput = '';
    }
  }
}
