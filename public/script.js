let currentQuestion = {};

function fetchQuestion(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      currentQuestion = data;
      displayQuestion(data);
    })
    .catch(err => console.error('Error fetching question:', err));
}

function displayQuestion(questionData) {
  document.getElementById('question').innerText = questionData.question;
  const optionsList = document.getElementById('options');
  optionsList.innerHTML = '';
  questionData.options.forEach((option, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = option;
    button.addEventListener('click', () => checkAnswer(index));
    li.appendChild(button);
    optionsList.appendChild(li);
  });
}

function checkAnswer(selectedOptionIndex) {
    if (selectedOptionIndex === currentQuestion.answer) {
      document.getElementById('feedback').innerText = 'Correct!';
    } else {
      document.getElementById('feedback').innerText = 'Wrong. Try Again.';
    }
  }

  document.getElementById('skip-button').addEventListener('click', () => {
    fetchQuestion('http://localhost:3000/next');
  });

  document.getElementById('previous-button').addEventListener('click', () => {
    fetchQuestion('http://localhost:3000/previous');
  });

  // Load the first question on page load
  fetchQuestion('http://localhost:3000/question');