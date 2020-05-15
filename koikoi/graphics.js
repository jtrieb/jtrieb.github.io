function fadeOutIntro(){
        var cover = document.getElementById('graphic').contentDocument.getElementById("page_cover");
        cover.style.visibility = "visible";
        console.log("Fading out");
        document.getElementById('graphic').contentDocument.getElementById('cover_fadein').beginElement();
    }

function fadeInGame(){
    var cover = document.getElementById('game_graphic').contentDocument.getElementById("page_cover");
    document.getElementById('game_graphic').contentDocument.getElementById('cover_fadeout').beginElement();
    cover.style.visibility = "hidden";
}