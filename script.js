const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('jokeDisplay');
const animalButton = document.getElementById('animalButton');
const animalDisplay = document.getElementById('animalDisplay');

jokeButton.addEventListener('click', () => {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "What's the best thing about Switzerland? I don't know, but their flag is a huge plus!",
        "I used to be a baker, but I couldn't make enough dough.",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How do you organize a space party? You 'planet'!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call a bear with no teeth? A gummy bear!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "What's the best time to go to the dentist? Tooth-hurty!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "How do you organize a space party? You 'planet'!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why was the math book sad? Because it had too many problems.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "How does a penguin build its house? Igloos it together!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeDisplay.textContent = randomJoke;
});

animalButton.addEventListener('click', () => {
    const animals = [
        { image: "Skibidi.gif", caption: "VERY SKIBIDI WILL YOU BE MY SKIBIDI" },
        //ADD ANIMAL HERE BOZO

    ];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    animalDisplay.innerHTML = `<img src="${randomAnimal.image}" alt="Animal"> <p>${randomAnimal.caption}</p>`;
});

const awwsound = new Audio('aww1.mp3');
const quackSound = new Audio('quack1.mp3');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Play the appropriate sound based on the button clicked
        if (button.id === 'animalButton') {
            awwsound.currentTime = 0; 
            awwsound.play(); 
        } else {
            quackSound.currentTime = 0; 
            quackSound.play(); 
        }

        buttonPressCount++; 
        pressCountDisplay.textContent = `Button presses: ${buttonPressCount}`;

        

        if (button.id === 'jokeButton') {
            const randomJoke = jokesData[Math.floor(Math.random() * jokesData.length)];
            if (randomJoke.punchline) {
                jokeDisplay.textContent = `${randomJoke.setup} ${randomJoke.punchline}`;
            } else {
                jokeDisplay.textContent = randomJoke.setup;
            }
        } else if (button.id === 'animalButton') {
            const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
            animalDisplay.innerHTML = `<img src="${randomAnimal.image}" alt="Animal"> <p>${randomAnimal.caption}</p>`;
        } else if (button.id === 'addFailButton') {
            const newFail = prompt("Describe the funny fail:");
            if (newFail) {
                const failEntry = document.createElement('div');
                failEntry.classList.add('failEntry');
                failEntry.textContent = newFail;
                hallOfShame.appendChild(failEntry);
            }
        }

    });
});

let recentJokes = [];
let jokeCounts = {};

jokeButton.addEventListener('click', () => {
    quackSound.currentTime = 0; 
    quackSound.play(); 

    let randomJoke;
    do {
        randomJoke = jokesData[Math.floor(Math.random() * jokesData.length)];
    } while (recentJokes.includes(randomJoke) || (jokeCounts[randomJoke.setup] && jokeCounts[randomJoke.setup] >= 3));

    recentJokes.push(randomJoke);
    if (recentJokes.length > 3) {
        recentJokes.shift(); 
    }

    jokeCounts[randomJoke.setup] = (jokeCounts[randomJoke.setup] || 0) + 1;

    if (randomJoke.punchline) {
        jokeDisplay.textContent = `${randomJoke.setup} ${randomJoke.punchline}`;
    } else {
        jokeDisplay.textContent = randomJoke.setup;
    }
});
