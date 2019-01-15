import { Component } from '@angular/core';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
 // template: '<h1>{{title}}<h1>', 
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'app';
  title = 'todo';
  message = 'Welcome api!';
 
  @ViewChild(PopupMenuComponent) menu:PopupMenuComponent

  openMenu(e) {
    this.menu.open(e)
  }
 
  itemSelected(item:number) {
    console.log("Item", item)
  }


}
