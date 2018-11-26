import {Component} from '@angular/core';
import {Model, TodoItem} from "./Model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng5lesson1';
  model = new Model();

  getUser() {
    return this.model.user;
  }

  getItems() {
    return this.model.items;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addUser(text) {
    if (text != "") {
      return this.model.items.push(new TodoItem(text, false));
    }
  }

}
