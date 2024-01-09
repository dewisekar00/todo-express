const express = require('express');
const router = express.Router();
const db = require('../models');
const { todo } = db;

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const allTodos = await todo.findAll();
      console.log(allTodos);
      res.status(200).json(allTodos);
    } catch (err) {
      res.status(500).json({
        message: 'cannot get all todo',
      });
    }
  },
};
