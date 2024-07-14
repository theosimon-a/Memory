window.addEventListener("load", gameSetup);

function gameSetup(){
    configureCardFlip();
    //embaralha cartas
    //carregar cartas na tela
    //inicia timer
}

function gameLoop(){
    //fazer coisas
}

function configureCardFlip(){
    let cardElements = document.querySelectorAll('.flip-box');
    for(let cardElement of cardElements)
        cardElement.addEventListener('click', flipCard);
}

function flipCard(){
    this.querySelector('.flip-box-inner').classList.toggle('flip');
}

function createSparkles() {
    const numSparkles = 100;
    for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle animate';
        document.body.appendChild(sparkle);

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        // Remove the sparkle after animation ends
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
}