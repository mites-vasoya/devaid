import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ToolsListComponent} from "./tools-list/tools-list.component";

const routes: Routes = [{
  path: "", component: HomeComponent,
}, {
  path : "tools/list", component : ToolsListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
