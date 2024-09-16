// Reproducir música de fondo
let backgroundMusic = new Audio('images/Flores Amarillas.mp3');
backgroundMusic.loop = true;

const phrases = [
"Felicidades ganaste, te debo una vida juntos.",
"Espero pagartela con intereses.",
"Cada día a tu lado es y será una bendición.",
"Contigo todo es más bonito.",
"Tu sonrisa ilumina mi mundo.",
"Te amo más que las palabras pueden decir.",
"Mama, que moto?.",
"You are my greatest love.",
"Eres una profesora increíble, siempre inspiras a los demás.",
"Tu dedicación y pasión por enseñar son contagiosas.",
"Como estudiante, siempre das lo mejor de ti, y eso me llena de orgullo.",
"Tus clases son un viaje emocionante que nunca quiero que termine.",
"PATROOON TENGA CUIDADO QUE ESE HOMBRE HIZO UN PACTO CON EL DIAAABLOOO.",
"Perdon tenia que hacerlo.",
"Tu paciencia y comprensión hacen de ti una gran maestra.",
"Eres la estudiante más brillante que he conocido.",
"Tu esfuerzo y dedicación son admirables, y me motivan a ser mejor.",
"With you, every moment is precious.",
"Quisiera ser un perro para cada vez que cuando pase yo diga GUAUUU JAJAJAJAJJAJAJ.",
"Tu es la lumière de ma vie.",
"Je t'aime plus que tout.",
"Every day with you is a dream come true.",
"La vie est belle avec toi.",
"Together, we can conquer the world.",
"Tu es mon bonheur.",
"You make my heart smile.",
"Chaque instant avec toi est un cadeau.",
"Love knows no boundaries.",
"Tu es mon soleil.",
"You complete me.",
"Dans tes bras, je trouve la paix.",
"My heart is yours forever.",
"Le temps passe vite avec toi.",
"You are my forever.",
"Chaque jour, je t'aime davantage.",
"With you, I am home.",
"Tu es ma muse.",
"You are the reason I believe in love.",
"À tes côtés, je me sens vivant.",
"Love is the greatest adventure.",
"Tu es mon rêve devenu réalité.",
"In your eyes, I see my future.",
"Ton sourire illumine mes jours.",
"With every heartbeat, I love you more.",
"L'amour est un voyage sans fin.",
"Eres un faro de luz en el camino del conocimiento.",
"Tu sabiduría y ternura hacen del mundo un lugar mejor.",
"Contigo, aprender es un regalo diario.",
"Tus palabras son como semillas que florecen en el corazón.",
"Eres la razón por la que siempre quiero aprender más.",
"Tu capacidad para enseñar es un verdadero arte.",
"La forma en que compartes tu conocimiento me inspira profundamente.",
"Cada lección contigo es una joya que atesoro.",
"Eres un ejemplo de lo que significa ser un buen estudiante y una gran profesora.",
"Tu amor por la enseñanza se refleja en todo lo que haces.",
"Eres una arquitecta del futuro, construyendo mentes brillantes.",
"Tu sonrisa es el mejor premio que puedo recibir en el aula."

];

let currentPhraseIndex = 0;

function showNextPhrase() {
    const phraseText = document.getElementById('phraseText');
    phraseText.textContent = phrases[currentPhraseIndex];
    phraseText.style.opacity = 1; // Mostrar la frase

    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;

    // Cambiar la posición de la frase aleatoriamente
    const x = Math.random() * (window.innerWidth - 200); // Ajustar según el tamaño del texto
    const y = Math.random() * (window.innerHeight - 100); // Ajustar según el tamaño del texto
    phraseText.style.left = `${x}px`;
    phraseText.style.top = `${y}px`;
}

function drawFlower(x, y, size) {
    const canvas = document.getElementById('flowerCanvas');
    const ctx = canvas.getContext('2d');

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el tallo
    ctx.fillStyle = 'green';
    ctx.fillRect(x + size / 2 - 10, y + size, 20, 100);

    // Dibujar los pétalos
    const petalCount = 16;
    ctx.fillStyle = 'yellow';
    for (let i = 0; i < petalCount; i++) {
        ctx.save();
        ctx.translate(x + size / 2, y + size / 2);
        ctx.rotate((Math.PI / 8) * i); // Rotar para dibujar los pétalos
        ctx.beginPath();
        ctx.ellipse(0, -size / 2.5, size / 5, size / 2, 0, 0, Math.PI * 2); // Pétalos
        ctx.fill();
        ctx.restore();
    }

    // Dibujar el centro después de todos los pétalos
    ctx.beginPath();
    ctx.fillStyle = 'brown';
    ctx.arc(x + size / 2, y + size / 2, size / 6, 0, Math.PI * 2); // Centro
    ctx.fill();
}

function animateFlower() {
    let size = 0; // Iniciar tamaño
    const growthInterval = setInterval(() => {
        if (size < 150) { // Tamaño máximo del girasol
            size += 5; // Incrementar tamaño
            drawFlower(100, 50, size); // Dibujar girasol en la posición deseada
        } else {
            clearInterval(growthInterval); // Detener el crecimiento
            setInterval(showNextPhrase, 5000); // Mostrar frases cada 5 segundos
        }
    }, 100); // Intervalo de tiempo para el crecimiento
}

function checkAnswer() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const flowerContainer = document.getElementById('flowerContainer');
    const phraseContainer = document.getElementById('phraseContainer');
    const container = document.getElementById('container'); // Contenedor principal

    if (userInput === '3horouges') {
        flowerContainer.classList.remove('hidden');
        phraseContainer.classList.remove('hidden');
        container.classList.add('hidden'); // Ocultar la pregunta

        backgroundMusic.play(); // Reproducir música de fondo

        animateFlower(); // Iniciar animación del girasol
    } else {
        alert("¡Intenta de nuevo!");
    }
}
