import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrl: './json-viewer.component.css'
})
export class JsonViewerComponent {
  @Input() json: any;  // Input for the JSON object to display
  expandedStates = new Map<string, boolean>();  // Track expand/collapse state

  // Check if the value is an object
  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

  // Toggle expand/collapse state for a JSON key
  toggleExpand(key: string): void {
    this.expandedStates.set(key, !this.expandedStates.get(key));  // Toggle the expanded state
  }

  // Get the expand/collapse state for a JSON key
  isExpanded(key: string): boolean {
    return this.expandedStates.get(key) !== false;  // Default to expanded
  }

  protected readonly Object = Object;
}
