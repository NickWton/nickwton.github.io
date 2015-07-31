function card (name, text) {
    this.name = name;
    this.text = text;
}
function drawCard (card){
    x=Math.floor(Math.random()*card.length);
    return card[x].name + "\n" + card[x].text ;
}

var itemCards = [];
for (i=0; i< 1;i++) {
    itemCards.push(new card("Master Ball", "Optionally add 1, 2 or 3 to ball roll."));}
for (i=0; i< 5;i++) {
    itemCards.push(new card("Potion", "Fully heal the hitpoints of one Pokemon (use during event phase)."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("Evolution Stone", "A stone that certain pokemon have affinity for."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("Rare Candy", "Give this to your pokemon; they love it."));}
for (i=0; i< 5;i++) {
    itemCards.push(new card("Time Machine", "Re-roll the dice (can be used whenever), then draw an item card."));}
for (i=0; i< 5;i++) {
    itemCards.push(new card("Portable Hammock", "All players on your space lose one fatigue counter."));}
for (i=0; i< 4;i++) {
    itemCards.push(new card("Fly", "Fly to any city."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("AB +4", "Attack Bonus +4."));}
for (i=0; i< 5;i++) {
    itemCards.push(new card("AB +3", "Attack Bonus +3."));}
for (i=0; i< 7;i++) {
    itemCards.push(new card("AB +2", "Attack Bonus +2."));}
function drawItem() {
    cardText.value=(drawCard(itemCards));
}


var TRCards = [];
for (i=0; i< 1;i++) {
    TRCards.push(new card("Team Rocket Training", "Level up all Team Rocket members."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Giovanni's Rage", "Any members located adjacent to a Team Rocket base fight Giovanni (You don't lose if he shreds you)."));}
for (i=0; i< 1;i++) {
    TRCards.push(new card("Giovanni's Rage", "Fight a Team Rocket Chieftain. If he fails, place a put a chieftain in play where he is. "));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Giovanni's Rage", "Fight fights a Team Rocket Raider. If he fails, place a put a raider in play where he is. All chieftains move."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Giovanni's Rage", "Fight fights a Team Rocket Grunt. If he fails, place a put a grunt in play where he is. All raiders move."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Grunt Development", "Release 1 grunts from station 1. All chieftains move."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Grunt Development", "Release 1 grunts from station 2. All raiders move."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Grunt Development", "Release 1 grunts from station 3. All grunts move."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Grunt Development", "Release 1 grunts from station 4. All grunts move."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Raider Development", "Release 1 raiders from station 1. All chieftains move."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Raider Development", "Release 1 raiders from station 2. All raiders move."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Raider Development", "Release 1 raiders from station 3. All grunts move."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Raider Development", "Release 1 raiders from station 4. All chieftains move."));}
for (i=0; i< 1;i++) {
    TRCards.push(new card("Chieftain Development", "Release 1 chieftain from station 3."));}
for (i=0; i< 1;i++) {
    TRCards.push(new card("Chieftain Development", "Release 1 chieftain from station 4."));}
function drawTR() {
   cardText.value=(drawCard(TRCards));
}

var eventCards = [];
for (i=0; i< 6;i++) {
    eventCards.push(new card("You found some goodies.", "Draw 1 Item Card."));}
for (i=0; i< 4;i++) {
    eventCards.push(new card("You found some goodies.", "Draw 2 Item Cards."));}
for (i=0; i< 1;i++) {
    eventCards.push(new card("You found some goodies.", "Draw 3 Item Cards."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("A nursing caravan passes by.", "Nurse Joy heals all your pokemon and all of your fatigue."));}
for (i=0; i< 1;i++) {
    eventCards.push(new card("A nursing caravan passes by.", "Nurse Joy heals all your pokemon."));}
for (i=0; i< 1;i++) {
    eventCards.push(new card("A nursing caravan passes by.", "Nurse Joy heals all your fatigue."));}
for (i=0; i< 4;i++) {
    eventCards.push(new card("You find Officer Jenny eating a donut on the sidewalk.", "You tell her to go anywhere and take care of a Team Rocket member."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("You see a strange Pokemon...", "Fight one of the legendary Pokemon."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("You see a rare Pokemon...", "Fight one of the rare Pokemon."));}
function drawEvent() {
    cardText.value=(drawCard(eventCards));
}

var environmentCards = [];
for (i=0; i< 3;i++) {
    environmentCards.push(new card("Sunshine", "Players in Area A lose one fatigue counter."));}
for (i=0; i< 3;i++) {
    environmentCards.push(new card("Sunshine", "Players in Area B lose one fatigue counter."));}
for (i=0; i< 3;i++) {
    environmentCards.push(new card("Sunshine", "Players in Area C lose one fatigue counter."));}
for (i=0; i< 3;i++) {
    environmentCards.push(new card("Sunshine", "Players in Area D lose one fatigue counter."));}
for (i=0; i< 3;i++) {
    environmentCards.push(new card("Sunshine", "Players in Area E lose one fatigue counter."));}
for (i=0; i< 3;i++) {
    environmentCards.push(new card("Sunshine", "Players in Area F lose one fatigue counter."));}
for (i=0; i< 1;i++) {
    environmentCards.push(new card("Mewtwo Sleeps. All players feel less pressure.", "All Players lose one fatigue counter."));}
function drawEnvironment() {
    cardText.value=(drawCard(environmentCards) + "\nA peaceful spot appears at position " + Math.floor(Math.random()*44) + ".");
}



console.log(TRCards.length);
console.log(drawCard(itemCards));