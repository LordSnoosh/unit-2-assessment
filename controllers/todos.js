const Todo = require('../models/todo');

module.exports = {
index,
delete: deleteTodo,
create,
update,

};


function index(todo, res) {
    res.render('index', {
        todos: Todo.getAll(),
        done: Todo.done,
      });
    }

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/');
  }

  function create(req, res) {
    Todo.create(req.body);
    res.redirect('/');
  }


    function update(req, res) {
        Todo.updateOne(req.params.id, req.body.todo);
        res.redirect('/');
    }
