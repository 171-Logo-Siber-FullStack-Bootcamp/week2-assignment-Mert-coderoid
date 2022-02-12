// import todos data
const todos = require("../data/todos.json")

getAllTodos = () => {
  // return all todos
    return todos;
}

getTodoById = (todoId) => {
      // return specific todo
    return todos.filter(todo => todo.id == todoId)
}

module.exports = {
    getAllTodos,
    getTodoById
}

