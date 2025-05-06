let inputNumberElement = document.getElementById('input-number');
let outputNumberElement = document.getElementById('output-number');
let feedbackElement = document.getElementById('feedback');
let scoreElement = document.getElementById('score');
let score = 0;
let currentInput;
let currentOutput;
let currentOperation;

function generateQuestion() {
    currentInput = Math.floor(Math.random() * 10) + 1; // Números del 1 al 10
    let operationIndex = Math.floor(Math.random() * 4);
    let operationSymbols = ['+', '-', '*', '/'];
    currentOperation = operationSymbols[operationIndex];
    let result;

    switch (currentOperation) {
        case '+':
            result = currentInput + Math.floor(Math.random() * 5) + 1;
            break;
        case '-':
            result = currentInput - Math.floor(Math.random() * currentInput);
            break;
        case '*':
            result = currentInput * (Math.floor(Math.random() * 3) + 1);
            break;
        case '/':
            // Asegurarse de que la división sea entera y positiva
            let multiplier = Math.floor(Math.random() * 3) + 1;
            currentInput = currentInput * multiplier;
            result = currentInput / multiplier;
            break;
    }

    currentOutput = Math.floor(result); // Asegurarse de que el resultado sea entero

    inputNumberElement.textContent = currentInput;
    outputNumberElement.textContent = currentOutput;
    feedbackElement.textContent = '';
}

function checkAnswer(selectedOperation) {
    let correctAnswer;
    switch (currentOperation) {
        case '+':
            correctAnswer = currentInput + (currentOutput - currentInput);
            break;
        case '-':
            correctAnswer = currentInput - (currentInput - currentOutput);
            break;
        case '*':
            correctAnswer = currentInput * (currentOutput / currentInput);
            break;
        case '/':
            correctAnswer = currentInput / (currentInput / currentOutput);
            break;
    }

    let isCorrect = false;
    switch (selectedOperation) {
        case '+':
            isCorrect = (currentInput + (currentOutput - currentInput)) === currentOutput;
            break;
        case '-':
            isCorrect = (currentInput - (currentInput - currentOutput)) === currentOutput;
            break;
        case '*':
            isCorrect = (currentInput * (currentOutput / currentInput)) === currentOutput;
            break;
        case '/':
            isCorrect = (currentInput / (currentInput / currentOutput)) === currentOutput;
            break;
    }


    if (isCorrect) {
        feedbackElement.textContent = '¡Correcto!';
        feedbackElement.style.color = 'green';
        score++;
        scoreElement.textContent = score;
    } else {
        feedbackElement.textContent = '¡Incorrecto! Intenta de nuevo.';
        feedbackElement.style.color = 'red';
    }
}

function nextQuestion() {
    generateQuestion();
}

// Generar la primera pregunta al cargar la página
generateQuestion();