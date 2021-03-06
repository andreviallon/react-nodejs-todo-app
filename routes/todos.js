const express = require('express');
const router = express.Router();
const { getTodos, addTodo, deleteTodo, checkTodo } = require('../controllers/todos');

router
    .route('/')
    .get(getTodos)
    .post(addTodo);

router
    .route('/:id')
    .delete(deleteTodo)
    .put(checkTodo)

module.exports = router;
