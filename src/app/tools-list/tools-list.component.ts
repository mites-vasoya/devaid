import {Component} from '@angular/core';
import {tools} from "../data/data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.css'
})
export class ToolsListComponent {
  public tools: any[] = tools;

  constructor(private router: Router) {
  }

  navigateToUrl(index: number) {
    let url : string = tools[index].url;
    console.log("URL : ", url);

    if(tools[index].launched != "no") this.router.navigate([url]);
  }
}
