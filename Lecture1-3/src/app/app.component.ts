import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'King';
  count: number = 0;
  url: string = 'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png';
  todoList: Array<string>;
  constructor(private dataService: DataService){
    console.log(this.dataService.getData());
    this.todoList = this.dataService.getData();
  }

  counter(){
    this.count = this.count + 1;
  }

  addFruit(){
     this.todoList.push('watermellon');
  }

  updateImg() {
    this.url = 'https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
  }

  getFruit(ev){
    console.log(ev);
  }
}
