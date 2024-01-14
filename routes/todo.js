const express = require('express');

const todoRouter = express.Router();

const { getAllTodo, addTodo, deleteTodoById, updateTodoByid, detailTodoById } = require('../controllers/todo');
const { verifyToken } = require('../middleware/auth');

todoRouter.get('/', getAllTodo);
todoRouter.post('/', verifyToken, addTodo);
todoRouter.delete('/:id',verifyToken, deleteTodoById)
todoRouter.put('/:id',verifyToken, updateTodoByid)
todoRouter.get('/:id' , detailTodoById)

module.exports = todoRouter;
