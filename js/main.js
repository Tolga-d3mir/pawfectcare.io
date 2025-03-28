

//emoties uithalen.
const emotions = [
    { id: "happy-dog", name: "Happy", message: "I'm so happy!" },
    { id: "normal-dog", name: "Normal", message: "I'm just chillin'" },
    { id: "angry-dog", name: "Angry", message: "Grrr! I'm angry!" },
    { id: "sad-dog", name: "Sad", message: "I'm feeling sad..." },
    { id: "sleepy-dog", name: "Sleepy", message: "Zzz... so tired..." },
    { id: "surprised-dog", name: "Surprised", message: "Wow! That surprised me!" },
    { id: "why-dog", name: "Confused", message: "I don't understand..." },
    { id: "tired-dog", name: "Tired", message: "I need a nap..." },
    { id: "playfull-dog", name: "Playful", message: "Let's play!" }
];



//wat moet er gebeuren
const itemEffects = {
    "ball": {
        "Happy": { emotion: "happy-dog", message: "Yay! More playtime!" },
        "Normal": { emotion: "happy-dog", message: "I love playing!" },
        "Angry": { emotion: "normal-dog", message: "Okay, playing makes me feel better" },
        "Sad": { emotion: "happy-dog", message: "Playing cheers me up!" },
        "Sleepy": { emotion: "tired-dog", message: "Too tired to play..." },
        "Surprised": { emotion: "playfull-dog", message: "Let's play with the ball!" },
        "Confused": { emotion: "happy-dog", message: "Oh! A ball! I love balls!" },
        "Tired": { emotion: "sleepy-dog", message: "Maybe later..." },
        "Playful": { emotion: "happy-dog", message: "This is the best day ever!" }
    },
    "brush": {
        "Happy": { emotion: "happy-dog", message: "I love being brushed!" },
        "Normal": { emotion: "happy-dog", message: "That feels nice!" },
        "Angry": { emotion: "normal-dog", message: "Hmm... this is actually relaxing" },
        "Sad": { emotion: "normal-dog", message: "Thanks for the brushing" },
        "Sleepy": { emotion: "sleepy-dog", message: "Zzz... keep brushing..." },
        "Surprised": { emotion: "happy-dog", message: "Oh! That tickles!" },
        "Confused": { emotion: "normal-dog", message: "What are you doing? Oh... nice!" },
        "Tired": { emotion: "sleepy-dog", message: "So relaxing..." },
        "Playful": { emotion: "happy-dog", message: "Brush me while we play!" }
    },
    "food": {
        "Happy": { emotion: "happy-dog", message: "Yummy! More food!" },
        "Normal": { emotion: "happy-dog", message: "Food always makes me happy!" },
        "Angry": { emotion: "normal-dog", message: "Food makes me less angry" },
        "Sad": { emotion: "happy-dog", message: "Food cheers me up!" },
        "Sleepy": { emotion: "sleepy-dog", message: "I'll eat it later..." },
        "Surprised": { emotion: "happy-dog", message: "Oh! My favorite food!" },
        "Confused": { emotion: "happy-dog", message: "Food! I love food!" },
        "Tired": { emotion: "normal-dog", message: "Thanks for the food" },
        "Playful": { emotion: "happy-dog", message: "Food then play!" }
    },
    "soap": {
        "Happy": { emotion: "surprised-dog", message: "Bath time? Really?" },
        "Normal": { emotion: "sad-dog", message: "Do I really need a bath?" },
        "Angry": { emotion: "angry-dog", message: "I HATE baths!" },
        "Sad": { emotion: "sad-dog", message: "Now I'm sad AND wet" },
        "Sleepy": { emotion: "angry-dog", message: "You woke me up for this?!" },
        "Surprised": { emotion: "why-dog", message: "Why would you do this?" },
        "Confused": { emotion: "why-dog", message: "What is happening?" },
        "Tired": { emotion: "angry-dog", message: "I was sleeping!" },
        "Playful": { emotion: "happy-dog", message: "Bath time can be fun!" },
    }
};





let currentEmotion = null

const dogMessage = document.getElementById("dog-message");
const newEmotionBtn = document.getElementById("new-emotion");



//randomisseer emoties
function setRandomEmotion() {
    if (currentEmotion) {
        document.getElementById(currentEmotion.id).style.display = "none"
    }
    //kiest een emotie
    const randomIndex = Math.floor(Math.random() * emotions.length)
    currentEmotion = emotions[randomIndex]
    //kiest de gedeffinieerde message
    document.getElementById(currentEmotion.id).style.display = "block"
    dogMessage.textContent = currentEmotion.message
}








document.getElementById("ball").addEventListener("click", function() {
    //bal-animatie
    const tennisBall = document.getElementById("tennis-ball")
    tennisBall.style.display = "block"
    
    setTimeout(() => {
        tennisBall.style.display = "none"
    }, 2000)
    
    handleItemClick("ball")
});


document.getElementById("brush").addEventListener("click", function() {
    //brush animatie
    const smoke = document.getElementById("smoke")
    smoke.style.display = "block"
    
    setTimeout(() => {
        smoke.style.display = "none"
    }, 2000)
    
    handleItemClick("brush")
});


document.getElementById("food").addEventListener("click", function() {
    //brokkels animatie
    const food = document.getElementById("dog-food")
    food.style.display = "block"
    
    setTimeout(() => {
        food.style.display = "none"
    }, 2000)
    
    handleItemClick("food")
});

document.getElementById("soap").addEventListener("click", function() {
    //soap animatie
    const bubbles = document.getElementById("bubbles")
    bubbles.style.display = "block"
    
    setTimeout(() => {
        bubbles.style.display = "none"
    }, 2000)
    
    handleItemClick("soap")
});

newEmotionBtn.addEventListener("click", setRandomEmotion)


setRandomEmotion()


//werkende item knopjess
function handleItemClick(itemId) {
    const effect = itemEffects[itemId][currentEmotion.name];
    if (effect) {
        document.getElementById(currentEmotion.id).style.display = "none"
        document.getElementById(effect.emotion).style.display = "block"
        dogMessage.textContent = effect.message
        
        //verandering van figuren
        currentEmotion = emotions.find(e => e.id === effect.emotion)
    }

    
}

console.log(itemEffects)

//functieknop voor random achtergrondkleuren
const backGround = document.getElementById('background')
const body = document.getElementById('body')

backGround.addEventListener("click", generateBackGround)

function generateBackGround() {
    let hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = hex
}


console.log(body)





