const answers = [
    "The cosmic alignment suggests a definite yes, though paths may shift.",
    "The shadows whisper of uncertainty; seek clarity within yourself first.",
    "The stars are cold and silent on this matter; ask when the moon is high.",
    "A resounding yes echoes through the void, though sacrifice may be required.",
    "The currents of fate flow against your desires; patience is your only shield.",
    "The oracle sees a flicker of hope, but the flame is fragile and needs care.",
    "Destiny is not yet written for this path; your own actions will carve the way.",
    "Beware of the answer you seek, for the truth carries a heavy burden today.",
    "The winds of change blow in your favor, bringing unexpected opportunities.",
    "No, the universe has a far greater purpose in store for you elsewhere.",
    "Signs point to a transformation; what you ask for may no longer be needed.",
    "The answer is hidden behind a veil of time; wait for the next seasonal shift.",
    "Your heart already knows the truth, but your mind is too loud to hear it.",
    "A portal opens toward success, yet the key remains in your hands alone.",
    "The void stares back with indifference; perhaps the question itself is flawed."
];

const ball = document.getElementById('eight-ball');
const answerText = document.getElementById('answer-text');
const triangle = document.getElementById('answer-triangle');
const questionInput = document.getElementById('question-input');

let isShaking = false;

ball.addEventListener('click', () => {
    if (isShaking) return;

    const question = questionInput.value.trim();
    if (!question) {
        alert("You must whisper your question to the void first (type it in the box)!");
        return;
    }
    
    isShaking = true;
    ball.classList.add('shake');
    triangle.classList.remove('revealed');
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerText.innerText = answers[randomIndex];
        
        ball.classList.remove('shake');
        triangle.classList.add('revealed');
        isShaking = false;
        
        // Optional: Clear input after a delay
        // setTimeout(() => { questionInput.value = ''; }, 2000);
    }, 1500);
});
