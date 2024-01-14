const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('missing token');
  }
// Verifikasi token menggunakan kunci rahasia yang disimpan di environment variable (process.env.JWT_TOKEN).

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) {
      return res.status(403).send('invalid token');
    }
    //  req.user = user; digunakan untuk menyimpan informasi user yang sudah divalidasi dari token ke dalam objek req
    req.user = user;
    next();
  });
};

module.exports = {
  verifyToken,
};
