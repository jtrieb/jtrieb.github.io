var deck = [];
var hand1 = [];
var hand2 = [];
var table = [];
var coll1 = [];
var coll2 = [];


var months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

var cardPoints = [1, 1, 5, 20,
                  1, 1, 5, 10,
                  1, 1, 5, 20,
                  1, 1, 5, 10,
                  1, 1, 5, 10,
                  1, 1, 5, 10,
                  1, 1, 5, 10,
                  1, 1, 10, 20,
                  1, 1, 5, 10,
                  1, 1, 5, 10,
                  1, 5, 10, 20,
                  1, 1, 1, 20];

var cardNames = ["Pine", "Pine", "Pine and poetry ribbon", "Crane and sun",
                 "Plum blossoms", "Plum blossoms", "Plum blossoms and poetry ribbon", "Bush warbler",
                 "Cherry blossoms", "Cherry blossoms", "Cherry blossoms and poetry ribbon", "Cherry blossoms and curtain",
                 "Wisteria", "Wisteria", "Wisteria and ribbon", "Cuckoo",
                 "Iris", "Iris", "Iris and ribbon", "Bridge",
                 "Peony", "Peony", "Peony and blue ribbon", "Butterflies",
                 "Clover", "Clover", "Clover and ribbon", "Boar",
                 "Susuki grass", "Susuki grass", "Wild geese", "Moon",
                 "Chrysanthemum", "Chrysanthemum", "Chrysanthemum and blue ribbon", "Sake cup",
                 "Maple", "Maple", "Maple and blue ribbon", "Deer",
                 "Storm", "Willow and ribbon", "Swallow", "Rainman and frog",
                 "Paulownia", "Paulownia", "Paulownia", "Phoenix"];

function createDeck() {
    var deck = [];
    for (var i = 0; i < 48; i++) {
        var card = {id: i + 1,
                    month: months[Math.floor(i / 4)],
                    points: cardPoints[i],
                    name: cardNames[i]};
        deck.push(card);
    }
    return(deck);
}

function shuffle(deck) {
    var oldDeck = deck;
    var newDeck = [];
    for (var i = 0; i < deck.length; i++){
        var j = Math.floor(Math.random() * oldDeck.length);
        newDeck.push(oldDeck[j]);
        oldDeck = oldDeck.slice(0,j).concat(oldDeck.slice(j+1,oldDeck.length));
    }
    return(newDeck)
}

function deal() {
    for (var i = 0; i < 8; i++) {
        hand1.push(deck[i]);
    }
    for (var i = 8; i < 16; i++) {
        hand2.push(deck[i]);
    }
    for (var i = 16; i < 24; i++) {
        table.push(deck[i]);
    }    
    deck = deck.slice(24, deck.length);
}