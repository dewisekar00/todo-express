const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const todoRoute = require('./todo');
const userRouter = require('./user');

router.use('/todos', verifyToken, todoRoute);

router.use('/users',userRouter);


module.exports = router