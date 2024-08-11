import {Component} from '@angular/core';
import {tools} from "../data/data";

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.css'
})
export class ToolsListComponent {
  public tools: any[] = tools;
}
