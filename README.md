# Multiple Choice Quiz

This is a simple multiple-choice quiz application built with HTML, CSS, and JavaScript. The application fetches quiz questions from a Node.js server and displays them to the user. Users can select an answer and receive feedback on whether their choice was correct or not.

## Features

- Fetches quiz questions from a Node.js server
- Displays questions and multiple-choice options
- Provides feedback on selected answers
- Allows users to skip to the next question

## Getting Started

### Prerequisites

- Node.js installed on your machine
- A web browser (e.g., Chrome, Firefox, Safari)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone [url]
   ```

2. Navigate to the project directory:

   ```bash
   cd multiple-choice-quiz
   ```

3. Install the necessary dependencies:

   ```bash
   npm install express cors
   ```



### Usage

1. Start the Node.js server:

   ```bash
   node server.js
   ```

2. Open `index.html`.

3. The first question will be displayed automatically.

4. Select an answer by clicking on one of the options.

5. Feedback will be displayed below the options.

6. Click the "Next" button to skip to the next question.

### Example

Here is an example of how the application works:

1. The application fetches a question from the server.
2. The question and its options are displayed to the user.
3. The user selects an answer.
4. The application provides feedback on whether the selected answer is correct or not.
5. The user can click the "Next" button to fetch and display the next question.