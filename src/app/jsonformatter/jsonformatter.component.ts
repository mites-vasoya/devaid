import {Component} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-jsonformatter',
  templateUrl: './jsonformatter.component.html',
  styleUrl: './jsonformatter.component.css'
})
export class JSONFormatterComponent {
  rawJson: string = '';  // Holds the raw JSON input from the user
  formattedJson: any = {};    // Holds the parsed JSON object
  errorMessage: string = '';  // Holds any error messages if JSON is invalid

  // Automatically parse JSON whenever the input changes
  onJsonInputChange() {
    this.errorMessage = '';  // Clear any previous error messages
    try {
      if(this.rawJson !== "") this.formattedJson = JSON.parse(this.rawJson);  // Parse the JSON input
    } catch (error) {
      this.errorMessage = 'Invalid JSON format. Please correct it and try again.';  // Display error message if JSON is invalid
      this.formattedJson = null;  // Clear formatted JSON on error
    }
  }


  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;  // Check if the value is an object
  }

  toggleExpand(event: MouseEvent): void {
    const target = event.target as HTMLElement;  // Cast event target to HTMLElement
    const parentElement = target.parentElement;  // Get the parent element

    if (parentElement) {
      const childrenContainer = parentElement.querySelector('.children');  // Find the children container

      if (childrenContainer) {
        childrenContainer.classList.toggle('collapsed');  // Toggle the collapsed class on the children container
        target.classList.toggle('expanded');  // Toggle the expanded class on the target element
      }
    }
  }
}
