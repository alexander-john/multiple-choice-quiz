const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Sample set of questions (can be replaced with a database or an API call)
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2
  },
  {
    id: 2,
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: 1
  },
  {
    id: 3,
    question: "What is the largest planet in the solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 2
  }
];

let currentQuestionIndex = 0;

app.get('/question', (req, res) => {
  res.json(questions[currentQuestionIndex]);
});

app.get('/next', (req, res) => {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  res.json(questions[currentQuestionIndex]);
});

app.get('/previous', (req, res) => {
  currentQuestionIndex = (currentQuestionIndex - 1 + questions.length) % questions.length;
  res.json(questions[currentQuestionIndex]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});