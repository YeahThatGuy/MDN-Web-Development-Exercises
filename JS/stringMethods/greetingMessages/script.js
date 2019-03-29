//Filtering greeting messages (uncomment and comment the other blocks)
/*
var list = document.querySelector(".output-ul");
list.innerHTML = "";

var greetings = ["Happy Birthday!",
    "Merry Christmas my love",
    "A happy Christmas to all the family",
    "You\'re all I want for Christmas",
    "Get well soon"];

for (var i = 0; i < greetings.length; i++) {
    var input = greetings[i];
    // Your conditional test needs to go inside the parentheses
    // in the line below, replacing what's currently there
    if (input.includes("Christmas")) {
        var listItem = document.createElement('li');
        listItem.textContent = input;
        list.appendChild(listItem);
    }
}
*/

// Fixing Capitalization (uncomment and comment the other blocks)
/*
var list = document.querySelector('.output-ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here


  var result = input[0].toUpperCase() + input.slice(1).toLowerCase();
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
*/

//Making new strings from old parts (uncomment and comment the other blocks)
let list = document.querySelector(".output-ul");
list.innerHTML = "";
let stations = ["MAN675847583748sjt567654;Manchester Piccadilly",
                "GNF576746573fhdg4737dh4;Greenfield",
                "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
                "SYB4f65hf75f736463;Stalybridge",
                "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield"];

for (let entry of stations) {

    let resultAcronym = entry.slice(0,3);
    let resultStationName = entry.indexOf(";");
    let result = resultAcronym + ": " + entry.slice(resultStationName + 1);
    let listItem = document.createElement("li");
    listItem.textContent = result;
    list.appendChild(listItem);
}