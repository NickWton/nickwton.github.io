//General card object with question and answer.
function card (question, answer) {
    this.question = question;
    this.answer = answer;
}
//General function to randomly draw card. Takes in the array of all of the deck of cards.
function drawCard (deck){
    x=Math.floor(Math.random()*deck.length);
    return x;
}

function readQuestion(x){
    return deck[x].question;
}

function readAnswer(x){
    return deck[x].answer;
}

var deck = [];
deck.push(new card("question", "answer"));