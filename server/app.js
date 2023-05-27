const express = require('express');
const cors = require('cors');

const myQuestions = require('./questions');
const logger = require('./logger');

const app = express();

//Middleware
app.use(cors());
app.use(express.json())
app.use(logger);

app.get('/', (req, res) => {
    res.send(`Welcome to the QUIZ API! There are 4 categories available, each containig 10 questions.`);
})
app.get('/questions', (req, res) => {
    res.send(myQuestions);            
})

app.get('/questions/:questionId', (req, res) => {
    const idx = req.params.questionId
    const question = myQuestions[idx]
  if(!question){
        res.status(400).json({ "error": `No questions with the key "${idx}"`})
    } else {
        res.send(question)
    }

})




module.exports = app;
