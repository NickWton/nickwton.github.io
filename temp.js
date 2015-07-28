/*jshint multistr:true */
var text = "dtorighjithj Nick dorgjdriog Nick rgjidrg Nick";
var myName = "Nick";
var hits = [""];

for (var i=0; i<text.length; i++) {
    if (text[i]==="N") {
        for (var j=i; j< i+myName.length; j++) {
            hits.push(text[j])
        }
    }
}

if (hits.length===0) {
    console.log ("Your name wasn't found!");
} else {
    console.log (hits);
}