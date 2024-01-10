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

  addTodo: async (req, res) => {
    try {
      // 1. Menangkap data dari request body
      const { taskName, description, completed } = req.body;

      // 2. Membuat objek baru untuk todo
      const newTodo = {
        taskName: taskName,
        description: description,
        completed: completed ? completed : false,
      };

      // 3. Menambahkan data ke dalam database menggunakan Sequelize
      const dataTodo = await todo.create(newTodo);
      console.log(dataTodo);

      // 4. Menanggapi dengan data yang baru ditambahkan
      res.status(200).json({
        message: 'Done adding todo!',
        dataTodo,
      });
    } catch (err) {
      // Penanganan kesalahan jika terjadi
      res.status(500).json({
        message: err.message || 'Internal server error',
      });
    }
  },

  deleteTodoById: async (req, res) => {
    try {
      const deleteTodo = await todo.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: 'Succes Delete Todo!',
      });
    } catch (err) {
      res.status(500).json({
        message: err.message || 'Internal Server Error',
      });
    }
  },

  updateTodoByid: async (req, res) => {
    try {
      const { taskName, description, completed } = req.body;
      const updateDataTodo = {
        taskName: taskName,
        description: description,
        completed: completed,
      };

      const updateTodo = await todo.update(updateDataTodo, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: 'Success Update Todo',
      });
    } catch (err) {
      res.status(500).json({
        message: err.message || 'Internal Server Error',
      });
    }
  },
};
