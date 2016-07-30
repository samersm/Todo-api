var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var todos = [{
    id: 1,
    description: 'Eat pizza for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}, {
    id: 3,
    description: 'Get some ice cream',
    completed: true
}];

app.get('/', function (req, res) {
    res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
    res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    
    // challenge code
    // Iterate of todos array. Find the match
    var matchedTodo;
    
    todos.forEach(function (todo) {
        if (todoId === todo.id) {
            matchedTodo = todo;
        }
    });

    // res.status(404).send();
    if (matchedTodo) {
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }
    
    // end of challenge code
    
});

app.listen(PORT, function () {
    console.log('Express listening on port ' + PORT + '!');
});