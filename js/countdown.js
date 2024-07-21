document.addEventListener('DOMContentLoaded', function() {
    let countdown;
    const timerDisplay = document.getElementById('timer-display');
    const resetButton = document.getElementById('reset-button');

    function timer(seconds) {
        // Limpiar cualquier timer existente
        clearInterval(countdown);

        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds); // Mostrar el tiempo inicial

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            // Verificar si debemos detenerlo
            if (secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }
            // Mostrar el tiempo restante
            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    function displayTimeLeft(seconds) {
        timerDisplay.textContent = seconds;
    }

    resetButton.addEventListener('click', () => {
        timer(30); // Resetear y empezar de 30 segundos
    });

    timer(30);

});
