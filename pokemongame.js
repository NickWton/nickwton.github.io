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
for (i=0; i< 4;i++) {
    itemCards.push(new card("AB +3", "Attack Bonus +3."));}
for (i=0; i< 6;i++) {
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


function Pokemon (name, lvl, hp, a, sa, s) {
    this.name = name;
    this.lvl = lvl;
    this.hp = hp;
    this.a = a;
    this.sa = sa
    this.s = s;
}
function drawPokemon (pokemon){
    x=Math.floor(Math.random()*pokemon.length);
    return pokemon[x];
}
var grassPokemon = [];
grassPokemon.push( new Pokemon("Paras", 1, 3, 3, 2, 2));
grassPokemon.push( new Pokemon("Bellsprout", 1, 2, 3, 2, 2));
grassPokemon.push( new Pokemon("Caterpie", 1, 2, 3, 3, 2));
grassPokemon.push( new Pokemon("Doduo", 1, 3, 4, 1, 2));
grassPokemon.push( new Pokemon("Spearow", 1, 3, 3, 1, 3));
grassPokemon.push( new Pokemon("Pidgey", 1, 2, 4, 2, 4));
function drawGrass (){
    pokemon=drawPokemon(grassPokemon);
    pokemonText.value = (pokemon.name + ": Level " + pokemon.lvl + ", HP " + pokemon.hp + ", Attack " + pokemon.a + ", Special Attack " + pokemon.sa + ", Speed " + pokemon.s);
}

var waterPokemon = [];
waterPokemon.push( new Pokemon("Psyduck", 1, 3, 1, 4, 2));
waterPokemon.push( new Pokemon("Horsea", 1, 3, 2, 3, 3));
waterPokemon.push( new Pokemon("Staryu", 1, 3, 2, 3, 3));
waterPokemon.push( new Pokemon("Poliwag", 1, 2, 3, 2, 3));
waterPokemon.push( new Pokemon("Magikarp", 1, 3, 0, 0, 4));
waterPokemon.push( new Pokemon("Tentacool", 1, 3, 3, 3, 2));
waterPokemon.push( new Pokemon("Goldeen", 1, 3, 3, 2, 3));
function drawWater (){
    pokemon=drawPokemon(waterPokemon);
    pokemonText.value = (pokemon.name + ": Level " + pokemon.lvl + ", HP " + pokemon.hp + ", Attack " + pokemon.a + ", Special Attack " + pokemon.sa + ", Speed " + pokemon.s);
}

var rarePokemon =[];
rarePokemon.push( new Pokemon("Charmander", 1, 3, 3, 4, 3));
rarePokemon.push( new Pokemon("Squirtle", 1, 4, 3, 3, 3));
rarePokemon.push( new Pokemon("Bulbasaur", 1, 4, 3, 3, 3));
rarePokemon.push( new Pokemon("Pikachu", 1, 3, 3, 4, 4));
rarePokemon.push( new Pokemon("Abra", 1, 2, 2, 4, 4));
rarePokemon.push( new Pokemon("Chansey", 1, 8, 1, 2, 1));
function drawRare (){
    pokemon=drawPokemon(rarePokemon);
    pokemonText.value = (pokemon.name + ": Level " + pokemon.lvl + ", HP " + pokemon.hp + ", Attack " + pokemon.a + ", Special Attack " + pokemon.sa + ", Speed " + pokemon.s);
}

var legendaryPokemon = [];
legendaryPokemon.push( new Pokemon("MewTwo", 4, 9, 6, 12, 13));
legendaryPokemon.push( new Pokemon("Moltres", 4, 12, 9, 9, 8));
legendaryPokemon.push( new Pokemon("Articuno", 4, 9, 7, 9, 8));
legendaryPokemon.push( new Pokemon("Zapdos", 4, 13, 7, 8, 9));
function drawLegendary (){
    pokemon=drawPokemon(legendaryPokemon);
    pokemonText.value = (pokemon.name + ": Level " + pokemon.lvl + ", HP " + pokemon.hp + ", Attack " + pokemon.a + ", Special Attack " + pokemon.sa + ", Speed " + pokemon.s);
}

var evolvedPokemon = [];
evolvedPokemon.push( new Pokemon("Golduck", 4, 7, 4, 8, 7));
evolvedPokemon.push( new Pokemon("Seadra", 4, 6, 5, 8, 6));
evolvedPokemon.push( new Pokemon("Starmie", 4, 6, 4, 8, 8));
evolvedPokemon.push( new Pokemon("Poliwhirl", 4, 7, 8, 5, 6));
evolvedPokemon.push( new Pokemon("Gyarados", 4, 9, 9, 3, 7));
evolvedPokemon.push( new Pokemon("Tentacruel", 4, 8, 6, 6, 6));
evolvedPokemon.push( new Pokemon("Seaking", 4, 7, 7, 7, 7));
evolvedPokemon.push( new Pokemon("Parasect", 4, 8, 6, 7, 5));
evolvedPokemon.push( new Pokemon("Weepinbell", 4, 7, 7, 7, 6));
evolvedPokemon.push( new Pokemon("Dodrio", 4, 6, 8, 3, 7));
evolvedPokemon.push( new Pokemon("Fearow", 4, 7, 7, 6, 8));
evolvedPokemon.push( new Pokemon("Raichu", 4, 8, 6, 8, 7));
evolvedPokemon.push( new Pokemon("Metapod", 3, 10, 3, 3, 3));
evolvedPokemon.push( new Pokemon("Pidgeotto", 3, 5, 6, 4, 7));
evolvedPokemon.push( new Pokemon("Charmeleon", 3, 7, 6, 7, 6));
evolvedPokemon.push( new Pokemon("Wartortle", 3, 8, 6, 6, 6));
evolvedPokemon.push( new Pokemon("Ivysaur", 3, 8, 6, 6, 5));
evolvedPokemon.push( new Pokemon("Kadabra", 3, 5, 2, 8, 8));
evolvedPokemon.push( new Pokemon("Butterfree", 5, 8, 6, 8, 7));
evolvedPokemon.push( new Pokemon("Pidgeot", 5, 8, 9, 7, 10));
evolvedPokemon.push( new Pokemon("Charizard", 5, 9, 9, 10, 9));
evolvedPokemon.push( new Pokemon("Blastoise", 5, 10, 8, 8, 8));
evolvedPokemon.push( new Pokemon("Venasaur", 5, 9, 8, 8, 7));
evolvedPokemon.push( new Pokemon("Alakazam", 5, 7, 4, 10, 10));

var pokemon=[];
for(var i = 0; i < grassPokemon.length; i++) {
pokemon.push(grassPokemon[i]);
}
for(var i = 0; i < rarePokemon.length; i++) {
pokemon.push(rarePokemon[i]);
}
for(var i = 0; i < waterPokemon.length; i++) {
pokemon.push(waterPokemon[i]);
}
for(var i = 0; i < legendaryPokemon.length; i++) {
pokemon.push(legendaryPokemon[i]);
}
for(var i = 0; i < evolvedPokemon.length; i++) {
pokemon.push(evolvedPokemon[i]);
}

var sel1 = document.getElementById('pokemon1');
for(var i = 0; i < pokemon.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = pokemon[i].name;
    opt.value = pokemon[i].name;
    sel1.appendChild(opt);
}
var sel2 = document.getElementById('pokemon2');
for(var i = 0; i < pokemon.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = pokemon[i].name;
    opt.value = pokemon[i].name;
    sel2.appendChild(opt);
}

var fatigue = document.getElementById("fatigue").value;
var lvl1 = document.getElementById("lvl1").value;
var lvl2 = document.getElementById("lvl2").value;
elvl1=lvl1-fatigue;
elvl2=lvl2-fatigue;
if (elvl1<=0){elvl1=1;}
if (elvl2<=0){elvl2=1;}
ownedPokemon1 = document.getElementById("pokemon1").value;
ownedPokemon2= document.getElementById("pokemon2").value;

function pokemon1 (){
    var fatigue = document.getElementById("fatigue").value;
    var lvl1 = document.getElementById("lvl1").value;
    elvl1=lvl1-fatigue;
    if (elvl1<=0){elvl1=1;}
    ownedPokemon1 = document.getElementById("pokemon1").value;
    //We need the object, not just the name.
    for(var i = 0; i < pokemon.length; i++) {
        if (ownedPokemon1 == pokemon[i].name) {
            ownedPokemon1 = pokemon[i];
        }
    }
    pokemon1Text.value = ("HP: " + (ownedPokemon1.hp+elvl1) + "       Attack: " + (ownedPokemon1.a+elvl1) + "        S. Attack: " + (ownedPokemon1.sa+elvl1) + "        Speed: " + (ownedPokemon1.s+elvl1));
}
//Same thing for second pokemon.
function pokemon2 (){
    var fatigue = document.getElementById("fatigue").value;
    var lvl2 = document.getElementById("lvl2").value;
    elvl2=lvl2-fatigue;
    if (elvl2<=0){elvl2=1;}
    ownedPokemon2 = document.getElementById("pokemon2").value;
    for(var i = 0; i < pokemon.length; i++) {
        if (ownedPokemon2 == pokemon[i].name) {
            ownedPokemon2 = pokemon[i];
        }
    }
    pokemon2Text.value = ("HP: " + (ownedPokemon2.hp+elvl2) + "       Attack: " + (ownedPokemon2.a+elvl2) + "        S. Attack: " + (ownedPokemon2.sa+elvl2) + "        Speed: " + (ownedPokemon2.s+elvl2));
}