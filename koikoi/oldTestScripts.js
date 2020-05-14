  
var client = RealtimeMessaging.createClient();
client.setClusterUrl('http://ortc-developers.realtime.co/server/2.1/');
    
client.onSubscribed = function (theClient, channel) {
    // Subscribed to the channel 'channel');
    // Send a message to the channel
    theClient.send(channel, 'Koikoi connected');
    var confirm = document.createElement("P");
    confirm.innerHTML = "Connected_01!";
    document.getElementById("selections").appendChild(confirm);
};

client.connect('36wTG2', 'key');
client.subscribe('testChannel', true, function(msg){
    var confirm = document.createElement("P");
    confirm.innerHTML = "Connected!";
    document.getElementById("selections").appendChild(confirm);
});
    
var gameId;
var channel;
    

    
function testChannel() {
    client.send('testChannel', 'test messageXXX');
}

function showHide(id) {
    var e = document.getElementById(id)
    if (e.style.display === "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
        }
    }
    
function randGen(n, len) {
    for (var i = 0; i < n; i++) {
        var val = Math.floor(Math.random()*Math.pow(10,(len-1)));
        var selection = document.createElement("BUTTON");
        selection.innerHTML = val;
        selection.onclick = function() {
            displayChoice(this.innerHTML);
            broadcastValue(this.innerHTML);
        };
        selection.id="selection'+i+'";
        document.getElementById("selections").appendChild(selection);
        }
    }
//function randGen(n, len) {
//    var val = Math.floor(Math.random()*Math.pow(10,(len-1)));
//    document.getElementById("selection1").innerHTML = val
//    }

function newGame(){
    showHide("choices");
    randGen(3, 6);
    gameIdGen();
    createGame();
}
    
function createGame() {
    channel = pusher.subscribe(gameId);
    channel.bind('pusher:subscription_succeeded', function() {
        document.getElementById("showGameId").innerHTML = "Connection to game " + gameId + "was successful.";
        });
    channel.bind('pusher:error', function() {
        document.getElementById("showGameId").innerHTML = "Could not connect.";
        });
}
   
function gameIdInput(){
    showHide("inputBox");
    showHide("choices");
}

function joinGame() {
    gameId = document.getElementById("idInput").value;
    console.log(gameId);
    //showHide("inputBox");
    //channel = pusher.subscribe("private-"+gameId);
    //channel.bind('client-event', function(data) {
    //    displayChoice(JSON.stringify(data));
    //});
}
    
function displayChoice(val) {
    document.getElementById("selection").innerHTML = val;
    document.getElementById("selection").style.fontSize = "48px";
    document.getElementById("selection").style.color = "blue";
    }

function gameIdGen(){
    gameId = Math.floor(Math.random()*1000000);
    //document.getElementById("showGameId").innerHTML = "Game ID: " + gameId;
    }

function broadcastValue(id, value) {
    channel.trigger(gameId, 'client-event', {
        message: value
    });
}