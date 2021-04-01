const todos = [
    { todo: 'Do Daily Code Challenges', done: false },
    { todo: 'Hang with the kids', done: false },
    { todo: 'Be a developer', done: false }
];

module.exports = {
getAll,
updateOne,
create,
deleteOne,
};

function getAll() {
    return todos;
}
function updateOne(idx, todo) {
    return todos.splice(idx, 1, todo);
}
function create(todo) {
    return todos.unshift(todo);
}

function deleteOne(idx) {
    return todos.splice(idx, 1)[0];
  };
