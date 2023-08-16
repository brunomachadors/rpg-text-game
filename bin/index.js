const { input, rawlist, select } = require("@inquirer/prompts");

const todos = [
  {
    title: "batata",
    description: "adsasd",
    priority: "L",
  },
  {
    title: "aipo",
    description: "adasda",
    priority: "M",
  },
];

function createTodo() {
  const todo = {};

  console.log("\n\nCreating a todo...");
  input({ message: "Enter the title: " }).then(function (title) {
    todo.title = title;

    input({ message: "Enter the description: " }).then(function (description) {
      todo.description = description;

      select({
        message: "Select a priority",
        choices: [
          {
            name: "Low",
            value: "L",
          },
          {
            name: "Medium",
            value: "M",
          },
          {
            name: "High",
            value: "H",
          },
        ],
      }).then(function (priority) {
        todo.priority = priority;

        // Add the new todo to the db file
        todos.push(todo);

        console.log("\n");

        renderMenu();
      });
    });
  });
}

function printTodos(list) {
  list.forEach(function (todo) {
    console.log("\n===============");
    console.log(todo.title);
    console.log(todo.description);
    console.log(todo.priority);
    console.log("===============\n");
  });
}

function listTodos() {
  printTodos(todos);
  renderMenu();
}

function sortByTitle() {
  const todosSortedByTitle = todos.sort((a, b) =>
    a.title.localeCompare(b.title),
  );
  printTodos(todosSortedByTitle);
  renderMenu();
}

function renderListMenu() {
  rawlist({
    message: "Listing all todos",
    choices: [
      { name: "List all", value: "all" },
      { name: "Sort by Title", value: "sortTitle" },
      { name: "Go back", value: "back" },
    ],
  }).then(function (option) {
    switch (option) {
      case "all":
        listTodos();
        break;
      case "sortTitle":
        sortByTitle();
        break;
      case "back":
        renderMenu();
        break;
      default:
        console.log("That is not a valid option");
    }
  });
}

function renderMenu() {
  rawlist({
    message: "Bem vindo à TODO +",
    choices: [
      { name: "Create a todo", value: "create" },
      { name: "List all todos", value: "list" },
      { name: "Exit", value: "exit" },
    ],
  }).then(function (option) {
    switch (option) {
      case "create":
        createTodo();
        break;
      case "list":
        renderListMenu();
        break;
      default:
        console.log("That is not a valid option");
    }
  });
}

renderMenu();
