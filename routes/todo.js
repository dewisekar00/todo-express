const express = require('express');

const todoRouter = express.Router();

const { getAllTodo, addTodo, deleteTodoById, updateTodoByid, detailTodoById } = require('../controllers/todo');

todoRouter.get('/', getAllTodo);
todoRouter.post('/', addTodo);
todoRouter.delete('/:id', deleteTodoById)
todoRouter.put('/:id', updateTodoByid)
todoRouter.get('/:id' , detailTodoById)

module.exports = todoRouter;
