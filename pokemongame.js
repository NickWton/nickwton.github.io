function card (name, text) {
    this.name = name;
    this.text = text;
}
function drawCard (card){
    x=Math.floor(Math.random()*card.length);
    return card[x].name + "\n" + card[x].text ;
}

var itemCards = [];
for (i=0; i< 2;i++) {
    itemCards.push(new card("Master Ball", "Optionally add 1 or 2 to ball roll."));}
for (i=0; i< 5;i++) {
    itemCards.push(new card("Ultra Ball", "Optionall add or subtract 1 to ball roll."));}
for (i=0; i< 7;i++) {
    itemCards.push(new card("Great Ball", "Optionally add 1 to ball roll."));}
for (i=0; i< 5;i++) {
    itemCards.push(new card("Potion", "Fully heal the hitpoints of one Pokemon (use during event phase)."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("Evolution Stone", "A stone that certain pokemon have affinity for."));}
for (i=0; i< 4;i++) {
    itemCards.push(new card("Time Machine", "Re-roll the dice."));}
for (i=0; i< 4;i++) {
    itemCards.push(new card("Fly", "Fly to any city."));}
for (i=0; i< 1;i++) {
    itemCards.push(new card("Attack Bonus +4", "Attack Bonus +4."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("Attack Bonus +3", "Attack Bonus +3."));}
for (i=0; i< 3;i++) {
    itemCards.push(new card("Attack Bonus +2", "Attack Bonus +2."));}
for (i=0; i< 4;i++) {
    itemCards.push(new card("Attack Bonus +1", "Attack Bonus +1."));}
for (i=0; i< 1;i++) {
    itemCards.push(new card("SpAttack Bonus +4", "SpAttack Bonus +4."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("SpAttack Bonus +3", "SpAttack Bonus +3."));}
for (i=0; i< 3;i++) {
    itemCards.push(new card("SpAttack Bonus +2", "SpAttack Bonus +2."));}
for (i=0; i< 4;i++) {
    itemCards.push(new card("SpAttack Bonus +1", "SpAttack Bonus +1."));}
function drawItem() {
    alert(drawCard(itemCards));
}


var TRCards = [];
function drawTR() {
    alert(drawCard(TRCards));
}

var eventCards = [];
for (i=0; i< 6;i++) {
    eventCards.push(new card("You found some goodies.", "Draw 1 Item Card."));}
for (i=0; i< 4;i++) {
    eventCards.push(new card("You found some goodies.", "Draw 2 Item Cards."));}
for (i=0; i< 1;i++) {
    eventCards.push(new card("You found some goodies.", "Draw 3 Item Cards."));}
for (i=0; i< 6;i++) {
    eventCards.push(new card("A Team Rocket grunt attacks you.", "Fight the Team Rocket Grunt."));}
for (i=0; i< 3;i++) {
    eventCards.push(new card("A nursing caravan passes by.", "Nurse Joy fully revives and heals all your pokemon."));}
for (i=0; i< 4;i++) {
    eventCards.push(new card("You find Officer Jenny eating a donut on the sidewalk.", "You tell her to go anywhere and take care of a Team Rocket Grunt."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("You see a strange Pokemon...", "Fight one of the legendary Pokemon."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("You see a rare Pokemon...", "Fight one of the rare Pokemon."));}
function drawEvent() {
    alert(drawCard(eventCards));
}

var environmentCards = [];
function drawEnvironment() {
    alert(drawCard(environmentCards));
}



console.log(itemCards.length);
console.log(drawCard(itemCards));