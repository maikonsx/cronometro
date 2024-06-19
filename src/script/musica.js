const musica = document.getElementById('musica');
        const playButton = document.getElementById('play');
        const pauseButton = document.getElementById('pause');
        const resetButton = document.getElementById('reset');

        // Adiciona o evento de clique para o botão de play
        playButton.addEventListener('click', () => {
            musica.play();
        });

        // Adiciona o evento de clique para o botão de pause
        pauseButton.addEventListener('click', () => {
            musica.pause();
        });

        // Adiciona o evento de clique para o botão de reiniciar
        resetButton.addEventListener('click', () => {
            musica.currentTime = 0;
            musica.play();
        });