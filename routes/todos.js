var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
router.delete('/:id', todosCtrl.delete);
router.post('/', todosCtrl.create);
router.put('/:id', todosCtrl.update);

module.exports = router;
