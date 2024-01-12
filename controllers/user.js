const db = require('../models');
const { users } = db;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret_key = process.env.JWT_TOKEN;

module.exports = {
  register: async (req, res) => {
    try {
      // 1.get request body
      const { username, email, password } = req.body;
      // 2.generate salt dan hash password
      const saltRounds = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, saltRounds);

      // 3.create new user
      const newUser = {
        username,
        email,
        password: hashPassword,
      };
      // 4.save user into database
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

  login: async (req, res) => {
    try {
      // 1.findOne with where condition email
      const user = await users.findOne({
        where: {
          email: req.body.email,
        },
      });
      // 2.if not user return message
      if (!user) {
        return res.status(404).json({
          message: 'sorry , users not found',
        });
      }

      // 3.compare password: pw valid or not with pw in database
      const comparePassword = await bcrypt.compare(req.body.password, user.password);

      //  4.if not correct return message
      if (!comparePassword) {
        return res.status(401).json({
          accessToken: null,
          message: 'Password is incorrect',
        });
      }
      // 5.sign token with email user

      const { id } = user;
      const token = jwt.sign({ id }, secret_key, {
        expiresIn: '3600s',
      });

      //6.user and pw valid send token and message succes login

      res.status(200).json({
        users: {
          id: users.id,
          email: users.email,
        },
        message: 'Login success',
        accessToken: token,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message || 'Internal Server Error',
      });
    }
  },
};
