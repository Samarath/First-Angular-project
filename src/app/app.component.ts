import { Component } from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-Angular-app';
  
  todoValue: string;
  list: Todo[];

  ngOnInit(){
    this.list = [];
    this.todoValue = "";
  }

  addItem(){
     if(this.todoValue !== ""){
       const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isdone: false
      }
      this.list.push(newItem);
     }
    this.todoValue = '';
    // console.log(this.list[0].value)
  }

  deleteItem(id: number) {
     this.list = this.list.filter(items => items.id !== id);
  }
}
