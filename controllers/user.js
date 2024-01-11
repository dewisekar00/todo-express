const db = require('../models');
const { users } = db;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret_key = process.env.JWT_TOKEN;

module.exports = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      // generate salt dan hash password
      const saltRounds = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, saltRounds);

      // membuat new user
      const newUser = {
        username,
        email,
        password: hashPassword,
      };
      // save user ke database
      const registeredUser = await users.create(newUser);

      res.status(200).json({
        message: 'Register Succes',
        data: registeredUser,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message || 'Internal Server Error',
      });
    }
  },


};
