const express = require('express');
const QuestionModel = require('../models/Question');

const router = express.Router();

router.get('/', async (_, res, next) => {
  const questions = await QuestionModel.find();
  res.status(200).json({ questions });
  next();
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log('id', id);
  await QuestionModel.findByIdAndDelete(id);
  console.log('deleted!');
  res.status(204).end();
});

module.exports = router;
