var gameId;
var channel;
var game;
var playerId;

function newGame() {
    showHide("choices");
    gameIdGen();
    channel = "game_" + gameId;
    playerId = "1";
    createGame();
}

function setupGame() {
    showGameInfo();
}

function gameIdGen(){
    gameId = Math.floor(Math.random()*1000000);
}

function showHide(id) {
    var e = document.getElementById(id)
    if (e.style.display === "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
}

function createGame() {
    game = RealtimeMessaging.createClient();
    game.setClusterUrl('https://ortc-developers.realtime.co/server/ssl/2.1/');
    game.connect('36wTG2', 'key');
    game.onConnected = function(ortc) {
        console.log("Connected to " + game.getUrl());
        game.subscribe(channel, true, function(ortc, channel, message) {
            readMessage(message);
        })
        game.onSubscribed = function(ortc, channel){
            console.log("Connected to game " + gameId + ".")
            if(playerId == "2"){
                sendInput("2_" + gameId, "connection");
            }
        }
        setupGame();
    }
}

function readMessage(message) {
    message = JSON.parse(message);
    console.log(message);
    if(message.sender != playerId) {
        if(message.type == "connection") {
            updateConnection(message.content);
        }
        if(message.type == "message") {
            displayMessage(message.content);
        }
    } 
}

function sendInput(value, type) {
    var message = {
        sender: playerId,
        type: type,
        content: value
    };
    game.send(channel, JSON.stringify(message));
}

function showGameInfo() {
    document.getElementById("info_player").innerHTML = "You are player " + playerId + ".";
    document.getElementById("info_gameId").innerHTML = "Game ID: " + gameId + ".";
    showHide("gameInfo");
}

function joinGame() {
    showHide("joinBox");
    gameId = document.getElementById("idInput").value;
    console.log(gameId);
    channel = "game_" + gameId;
    playerId = "2";
    createGame();
    document.getElementById("waiting").innerHTML = "CONNECTING...";
}

function updateConnection(message) {
    if(playerId == "1") {
        if(message == "2_" + gameId) {
            document.getElementById("waiting").innerHTML = "Player 2 connected."
            showHide("inputBox");
            sendInput("1_" + gameId, "connection");
        }
    }
    if(playerId == "2") {
        if(message == "1_" + gameId) {
            document.getElementById("waiting").innerHTML = "Player 1 connected."
            showHide("inputBox");
        }
    }
}

function displayMessage(message) {
    document.getElementById("selection").innerHTML = message;
}