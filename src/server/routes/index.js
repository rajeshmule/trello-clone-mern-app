const express = require('express');

const router = express.Router();

const usersRouter = require('./users');


router.get('/', (req, res) => {
  res.json({ message: 'Wellcome to artus API.' }); // res.json({ message: "Welcome to artus API" })
});

router.use('/users', usersRouter);

module.exports = router;
