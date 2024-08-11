import {Component} from '@angular/core';
import {tools} from "../../data/data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchbar_input: string = "";
  tools_list : any[] = tools;
  searched_items: any[] = [];

  constructor(private router: Router) {
  }

  onSearch() {
    console.log("Search Term : ", this.searchbar_input);
    if(this.searchbar_input != ""){
      this.searched_items = this.tools_list.filter((tool : any) =>
        tool.title.toLowerCase().includes(this.searchbar_input.toLowerCase().trim())
      );
    } else {
      this.searched_items = [];
    }
    console.log("this.searched_items : ", this.searched_items);
  }

  navigateOnClick(tool : any) {
    this.searched_items = [];
  }
}
