//General card object with name and text.
function card (name, text) {
    this.name = name;
    this.text = text;
}
//General function to randomly draw card. Takes in the array of all of the deck of cards.
function drawCard (card){
    x=Math.floor(Math.random()*card.length);
    return card[x].name + "\n" + card[x].text ;
}

var itemCards = [];
for (i=0; i< 1;i++) {
    itemCards.push(new card("Master Ball", "You can throw this when the pokemon has 6HP or lower. Optionally add 1, 2 or 3 to ball roll."));}
for (i=0; i< 5;i++) {
    itemCards.push(new card("Full Restore", "Fully heal the hitpoints of one Pokemon (dead or alive). This cannot be used during a battle. This can be used between consecutive battles."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("Evolution Stone", "A stone that certain pokemon have affinity for."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("Rare Candy", "Give this to your pokemon; they love it."));}
for (i=0; i< 7;i++) {
    itemCards.push(new card("Time Machine", "Re-roll the dice (can be used whenever as an instant), then draw an item card."));}
for (i=0; i< 1;i++) {
    itemCards.push(new card("Mewtwo's Helmet", "Re-draw the card (can be used whenever a player draws a card), then draw two item cards."));}
for (i=0; i< 3;i++) {
    itemCards.push(new card("Portable Hammock", "All players on your space lose one fatigue counter."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("Fly", "Fly to any spot on the map."));}
for (i=0; i< 2;i++) {
    itemCards.push(new card("AB +4", "Attack Bonus +4."));}
for (i=0; i< 4;i++) {
    itemCards.push(new card("AB +2", "Attack Bonus +2."));}
for (i=0; i< 4;i++) {
    itemCards.push(new card("Substitute", "Substitute 3HP or 1/2 (rounded up) of your pokemon's max HP."));}
for (i=0; i< 1;i++) {
    itemCards.push(new card("Flaming Macho Brace", "Burn your pokemon and reduce its special attack to 0. Your pokemon gains triple experience until the end of the battle."));}
for (i=0; i< 1;i++) {
    itemCards.push(new card("Freezing Power Belt", "Roll a dice with a 50% chance to skip your current battle turn, then freeze your pokemon. Your pokemon gains triple experience until the end of the battle."));}
for (i=0; i< 1;i++) {
    itemCards.push(new card("Lagging Power Weight", "Paralyze your pokemon. Your pokemon gains triple experience until the end of the battle."));}
for (i=0; i< 1;i++) {
    itemCards.push(new card("Toxic Power Lens", "Deal 3 damage to your pokemon. Poison your pokemon. Your pokemon gains triple experience until the end of the battle."));}
for (i=0; i< 4;i++) {
    itemCards.push(new card("Experience Share", "The experience gained from this battle is transferred to another player's pokemon (that pokemon must be a lower level)."));}
for (i=0; i< 3;i++) {
    itemCards.push(new card("Roidy Berry", "Deal 3 damage or half your pokemon's current hp (whichever is higher) to your pokemon. Attack Bonus +3; SpAttack Bonus +3; Speed Bonus +3"));}
function drawItem() {
    cardText.value=(drawCard(itemCards));
}

var TRCards = [];
for (i=0; i< 3;i++) {
    TRCards.push(new card("Giovanni is thinking... Should he spend money on training or hiring?", "If the highest level player owned pokemon is higher level than a raider, level up all team rocket members. Else, release 1 chieftain from station 3."));}
for (i=0; i< 1;i++) {
    TRCards.push(new card("Giovanni is drinking lemonade on his front porch.", "Any player located adjacent to a Team Rocket base fight Giovanni (You don't lose the game if he shreds you). For each player defeated this way, release a chieftain from station 4."));}
for (i=0; i< 1;i++) {
    TRCards.push(new card("You tried to run but he caught you before you could.", "Fight a Team Rocket Chieftain. If you win, draw an item card. If you lose, place a chieftain in play where you lost. "));}
for (i=0; i< 1;i++) {
    TRCards.push(new card("This guy looks tough... Your curiosity gets the best of you.", "You approach a Team Rocket Raider. Fight him. If you win, draw an item card. If you lose, place a raider in play where you lost. All chieftains move."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("You make eye contact with someone... Who is he?", "He's a Team Rocket Grunt. Fight him.If you win, draw an item card. If you lose, place a grunt in play where you lost. All raiders move."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Team Rocket Grunts have been spending time battling with each other.", "All grunts become raiders."));}
for (i=0; i< 1;i++) {
    TRCards.push(new card("Team Rocket Raiders have been roughing each other up.", "All raiders become chieftains."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Grunt Development:", "Release 1 grunts from station 1."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Grunt Development:", "Release 1 grunts from station 2."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Grunt Development:", "Release 1 grunts from station 3."));}
for (i=0; i< 4;i++) {
    TRCards.push(new card("Grunt Development:", "Release 1 grunts from station 4."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Raider Development:", "Release 1 raider from station 1."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Raider Development:", "Release 1 raider from station 2."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Raider Development:", "Release 1 raider from station 3."));}
for (i=0; i< 2;i++) {
    TRCards.push(new card("Raider Development:", "Release 1 raider from station 4. "));}
function drawTR() {
   cardText.value=(drawCard(TRCards));
}

var eventCards = [];
for (i=0; i< 6;i++) {
    eventCards.push(new card("You found a goodie on the ground.", "Draw 1 Item Card."));}
for (i=0; i< 4;i++) {
    eventCards.push(new card("You found some goodies.", "Draw 2 Item Cards."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("You found a pile of goodies.", "Draw 3 Item Cards."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("You see a Meowth. You decide to follow him. He leads you to a rare candy and you scoop it right from under him.", "Gain one rare candy."));}
for (i=0; i< 1;i++) {
    eventCards.push(new card("You see a Clefairy. What a gentle Pokemon. He offers you an evolution stone.", "Gain one evolution stone."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("A nursing caravan passes by.", "Nurse Joy heals all your pokemon and all of your fatigue. If there is no effect, Nurse Joy feels guilty. She gives you a full restore instead."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("How sad... A helpless fish flopping on the ground.", "Fight a level 1 Magikarp."));}
for (i=0; i< 1;i++) {
    eventCards.push(new card("How sad... A vigorous yet helpless fish flopping on the ground.", "Fight a level 2 Magikarp."));}
for (i=0; i< 4;i++) {
    eventCards.push(new card("You find Officer Jenny eating a donut on the sidewalk.", "You tell her to go anywhere and take care of a Team Rocket member."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("You see a strange Pokemon...", "You may fight one of the legendary Pokemon. Else, draw another event card."));}
for (i=0; i< 2;i++) {
    eventCards.push(new card("You see a rare Pokemon...", "You may fight one of the rare Pokemon at level 1 or level 2. Else, draw another event card."));}
function drawEvent() {
    cardText.value=(drawCard(eventCards));
}

var environmentCards = [];
for (i=0; i< 2;i++) {
    environmentCards.push(new card("The skies are clear.", "Players can fight Team Rocket members adjacent to their position."));}
for (i=0; i< 2;i++) {
    environmentCards.push(new card("You and your Pokemon feel weird. Is Mewtwo playing tricks again?", "Pokemon with the lower speed check perform their battle turn first."));}
for (i=0; i< 2;i++) {
    environmentCards.push(new card("A sandstorm rages", "Pokemon take one damage during the apply status phase."));}
for (i=0; i< 2;i++) {
    environmentCards.push(new card("It's raining, but not to heavily. Some would say its drizzling, but Team Rocket hates the rain.", "Team Rocket does not move."));}
for (i=0; i< 2;i++) {
    environmentCards.push(new card("Pelting hail falls on the battlefield.", "All pokemon have one less speed and attack."));}
for (i=0; i< 2;i++) {
    environmentCards.push(new card("A thick fog clouds the battlefield.", "All pokemon have two less special attack."));}
for (i=0; i< 2;i++) {
    environmentCards.push(new card("Bursts of light rain down from a shadowy aura in the sky.", "Mewtwo was spotted at position " + Math.ceil(Math.random()*44)));}
for (i=0; i< 2;i++) {
    environmentCards.push(new card("Strong air currents blow across the land..", "Items cannot be used."));}
for (i=0; i< 2;i++) {
    environmentCards.push(new card("The weather reminds you of a diamond dust decoracted Christmas.", "All players draw one item card."));}
for (i=0; i< 2;i++) {
    environmentCards.push(new card("It's thunderstorming.", "Using special attacks cause Pokemon to take one damage."));}
for (i=0; i< 1;i++) {
    environmentCards.push(new card("The sun slowly warms the air, while a gentle warm breeze refreshes you.", "All Pokemon gain one hit point. Players do not fatigue."));}
for (i=0; i< 1;i++) {
    environmentCards.push(new card("All players feel less pressure. It's almost as if Mewtwo is sleeping...", "All Players lose one fatigue counter. All players can travel up to 5 spaces."));}
for (i=0; i< 1;i++) {
    environmentCards.push(new card("You catch a glimpse of a magnificent bird flying alongside a rainbow across the sky. There is no data in the Pokedex.", "All Players lose all fatigue counters. All Pokemon are healed to full health."));}
function drawEnvironment() {
    cardText.value=(drawCard(environmentCards) + " There is less commotion at position " + Math.ceil(Math.random()*44) + ". A time machine was unearthed at position " + Math.ceil(Math.random()*44) + ".");
}


function Pokemon (name, lvl, hp, a, sa, s) {
    this.name = name;
    this.lvl = lvl;
    this.hp = hp;
    this.a = a;
    this.sa = sa;
    this.s = s;
}
function drawPokemon (pokemon){
    x=Math.floor(Math.random()*pokemon.length);
    return pokemon[x];
}
var grassPokemon = [];
grassPokemon.push( new Pokemon("Paras", 1, 3, 3, 2, 2));
grassPokemon.push( new Pokemon("Bellsprout", 1, 3, 3, 3, 2));
grassPokemon.push( new Pokemon("Caterpie", 1, 3, 3, 3, 2));
grassPokemon.push( new Pokemon("Doduo", 1, 3, 4, 1, 2));
grassPokemon.push( new Pokemon("Spearow", 1, 3, 3, 1, 3));
grassPokemon.push( new Pokemon("Pidgey", 1, 2, 4, 2, 4));
grassPokemon.push( new Pokemon("Vulpix", 1, 3, 2, 3, 3));
grassPokemon.push( new Pokemon("Growlithe", 1, 3, 3, 2, 3));
function drawGrass (){
    temp_pokemon=drawPokemon(grassPokemon);
    pokemonText.value = (temp_pokemon.name + ": Level " + temp_pokemon.lvl + ", HP " + temp_pokemon.hp + ", Attack " + temp_pokemon.a + ", Special Attack " + temp_pokemon.sa + ", Speed " + temp_pokemon.s);
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
    temp_pokemon=drawPokemon(waterPokemon);
    pokemonText.value = (temp_pokemon.name + ": Level " + temp_pokemon.lvl + ", HP " + temp_pokemon.hp + ", Attack " + temp_pokemon.a + ", Special Attack " + temp_pokemon.sa + ", Speed " + temp_pokemon.s);
}

var rarePokemon =[];
rarePokemon.push( new Pokemon("Charmander", 1, 3, 3, 4, 3));
rarePokemon.push( new Pokemon("Squirtle", 1, 4, 3, 3, 3));
rarePokemon.push( new Pokemon("Bulbasaur", 1, 4, 3, 3, 3));
rarePokemon.push( new Pokemon("Pikachu", 1, 3, 2, 4, 4));
rarePokemon.push( new Pokemon("Abra", 1, 2, 2, 4, 4));
rarePokemon.push( new Pokemon("Chansey", 1, 8, 1, 2, 1));
function drawRare (){
    temp_pokemon=drawPokemon(rarePokemon);
    pokemonText.value = (temp_pokemon.name + ": Level " + temp_pokemon.lvl + ", HP " + temp_pokemon.hp + ", Attack " + temp_pokemon.a + ", Special Attack " + temp_pokemon.sa + ", Speed " + temp_pokemon.s);
}

var legendaryPokemon = [];
legendaryPokemon.push( new Pokemon("MewTwo", 4, 9, 6, 12, 13));
legendaryPokemon.push( new Pokemon("Moltres", 4, 12, 9, 9, 8));
legendaryPokemon.push( new Pokemon("Articuno", 4, 9, 7, 9, 8));
legendaryPokemon.push( new Pokemon("Zapdos", 4, 13, 7, 8, 9));
function drawLegendary (){
    temp_pokemon=drawPokemon(legendaryPokemon);
    pokemonText.value = (temp_pokemon.name + ": Level " + temp_pokemon.lvl + ", HP " + temp_pokemon.hp + ", Attack " + temp_pokemon.a + ", Special Attack " + temp_pokemon.sa + ", Speed " + temp_pokemon.s);
}

var evolvedPokemon = [];
evolvedPokemon.push( new Pokemon("Golduck", 4, 7, 4, 8, 7));
evolvedPokemon.push( new Pokemon("Seadra", 4, 6, 5, 8, 6));
evolvedPokemon.push( new Pokemon("Starmie", 4, 6, 4, 8, 8));
evolvedPokemon.push( new Pokemon("Poliwhirl", 4, 6, 7, 5, 6));
evolvedPokemon.push( new Pokemon("Poliwrath", 4, 7, 8, 5, 7));
evolvedPokemon.push( new Pokemon("Gyarados", 4, 10, 11, 6, 8));
evolvedPokemon.push( new Pokemon("Tentacruel", 4, 8, 6, 6, 6));
evolvedPokemon.push( new Pokemon("Seaking", 4, 7, 7, 7, 7));
evolvedPokemon.push( new Pokemon("Parasect", 4, 8, 6, 7, 5));
evolvedPokemon.push( new Pokemon("Weepinbell", 4, 7, 7, 7, 6));
evolvedPokemon.push( new Pokemon("Dodrio", 4, 6, 8, 3, 7));
evolvedPokemon.push( new Pokemon("Fearow", 4, 7, 7, 6, 8));
evolvedPokemon.push( new Pokemon("Raichu", 4, 8, 6, 9, 7));
evolvedPokemon.push( new Pokemon("Metapod", 3, 10, 3, 3, 3));
evolvedPokemon.push( new Pokemon("Pidgeotto", 3, 5, 6, 4, 7));
evolvedPokemon.push( new Pokemon("Charmeleon", 3, 7, 6, 7, 6));
evolvedPokemon.push( new Pokemon("Wartortle", 3, 8, 6, 6, 6));
evolvedPokemon.push( new Pokemon("Ivysaur", 3, 8, 6, 6, 5));
evolvedPokemon.push( new Pokemon("Kadabra", 3, 5, 2, 7, 7));
evolvedPokemon.push( new Pokemon("Butterfree", 5, 9, 6, 8, 8));
evolvedPokemon.push( new Pokemon("Pidgeot", 5, 8, 9, 7, 10));
evolvedPokemon.push( new Pokemon("Charizard", 5, 9, 9, 10, 9));
evolvedPokemon.push( new Pokemon("Blastoise", 5, 10, 8, 8, 8));
evolvedPokemon.push( new Pokemon("Venasaur", 5, 9, 8, 8, 7));
evolvedPokemon.push( new Pokemon("Alakazam", 5, 7, 4, 10, 10));
evolvedPokemon.push( new Pokemon("Ninetales", 4, 8, 4, 9, 7));
evolvedPokemon.push( new Pokemon("Arcanine", 4, 8, 9, 5, 7));

var pokemon=[];
pokemon.push( new Pokemon("NaPokemon", NaN, NaN, NaN, NaN, NaN));
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

//These populate the pokemon lists.
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
    ownedPokemon1 = document.getElementById("pokemon1").value;
    //We need the object, not just the name.
    for(var i = 0; i < pokemon.length; i++) {
        if (ownedPokemon1 == pokemon[i].name) {
            ownedPokemon1 = pokemon[i];
        }
    }
    var fatigue = document.getElementById("fatigue").value;
    var lvl1 = document.getElementById("lvl1").value;
    elvl1=lvl1-fatigue-ownedPokemon1.lvl;
    if (elvl1<=0){elvl1=0;}
    pokemon1Text.value = ("HP: " + (ownedPokemon1.hp+elvl1) + "       Attack: " + (ownedPokemon1.a+elvl1) + "        S. Attack: " + (ownedPokemon1.sa+elvl1) + "        Speed: " + (ownedPokemon1.s+elvl1));
}
//Same thing for second pokemon.
function pokemon2 (){
    ownedPokemon2 = document.getElementById("pokemon2").value;
    for(var i = 0; i < pokemon.length; i++) {
        if (ownedPokemon2 == pokemon[i].name) {
            ownedPokemon2 = pokemon[i];
        }
    }
    var fatigue = document.getElementById("fatigue").value;
    var lvl2 = document.getElementById("lvl2").value;
    elvl2=lvl2-fatigue-ownedPokemon2.lvl;
    if (elvl2<=0){elvl2=0;}
    pokemon2Text.value = ("HP: " + (ownedPokemon2.hp+elvl2) + "       Attack: " + (ownedPokemon2.a+elvl2) + "        S. Attack: " + (ownedPokemon2.sa+elvl2) + "        Speed: " + (ownedPokemon2.s+elvl2));
}