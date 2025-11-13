// Inicializamos las variables
let numeroSecreto = Math.floor(Math.random() * 100) + 1; 
let intentos = 0;


function adivinarNumero() {
  const guessInput = document.getElementById('guessInput');
  const feedback = document.getElementById('feedback');
  const attempts = document.getElementById('attempts');
  const intento = parseInt(guessInput.value);

  if (isNaN(intento) || intento < 1 || intento > 100) {
    feedback.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    return;
  }

  intentos++;
  attempts.textContent = `Intentos: ${intentos}`;

  if (intento < numeroSecreto) {
    feedback.textContent = "El número es mayor. ¡Intenta de nuevo!";
  } else if (intento > numeroSecreto) {
    feedback.textContent = "El número es menor. ¡Intenta de nuevo!";
  } else {
    feedback.textContent = `¡Felicidades! Has adivinado el número en ${intentos} intentos.`;
    
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    attempts.textContent = `Intentos: 0`;
  }

  guessInput.value = ''; 
  guessInput.focus();     
}
