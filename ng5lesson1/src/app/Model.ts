export class Model {
  user;
  items;

  constructor() {
    this.user = "张三";
    this.items = [
      new TodoItem("shopping", false),
      new TodoItem("eat", false),
      new TodoItem("sleep", false),
      new TodoItem("drink", true)
    ]
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
