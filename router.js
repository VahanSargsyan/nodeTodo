const express = require('express');
const router = express.Router();
const todos = [];

let id = 1;

router.get('/', (req, res) => {
     res.render('index', {todos});
    
});

router.post('/', (req, res) => {

    req.checkBody('todo', 'invalid').notEmpty();
    req.getValidationResult().then(function(result) {
        if (!result.isEmpty()) {
            res.end('type smth');
        }else{
            todos.push({ id, title: req.body.todo });
            id++
            res.redirect('/');
        }
        
    });
});

// DELETE -> /todos/1
// deleted todo
router.post('/delete/:id', (req, res) => {
   
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === +req.params.id){
            todos.splice(i, 1);
        }
    }
    res.redirect('/');
});

router.get('/edit/:id', (req, res) => {
    const gg = todos.find((todo)=>{
        return todo.id == req.params.id
    })
    console.log(gg)
    res.render('edit.pug', {gg});
})

router.post('/edit/:id', (req, res) => {
    const yandex = todos.find((arr) => {
        return arr.id == req.params.id;
    });
    yandex.title = req.body.update;
    res.redirect('/');
});

module.exports = router;