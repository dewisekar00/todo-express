const express = require('express');

const todoRouter = express.Router();

const { getAllTodo, addTodo, deleteTodoById } = require('../controllers/todo');

todoRouter.get('/', getAllTodo);
todoRouter.post('/add-todo', addTodo);
todoRouter.delete('/:id', deleteTodoById)

module.exports = todoRouter;
