const todos = require("../data/todos.json")

getAllTodos = () => {
    return todos;
}

getTodoById = (todoId) => {
    return todos.filter(todo => todo.id == todoId)
}

module.exports = {
    getAllTodos,
    getTodoById
}

