const express = require('express');

const todoRouter = express.Router();

const { getAllTodo } = require('../controllers/todo');

todoRouter.get('/', getAllTodo);

module.exports = todoRouter;
