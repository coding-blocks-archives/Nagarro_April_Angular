import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
@Input() todos;
@Output() fav = new EventEmitter<string>();

getTodos(){
  console.log(this.todos);
}

favFruit(){
  this.fav.emit(this.todos[2]);
}

}
