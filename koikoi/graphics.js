function fadeOutIntro() {
    showHide("cover_div");
    setTimeout(function(){fadeOutIntro2()}, 500);
}

function fadeOutIntro2(){
    var anim = document.getElementById("cover").contentDocument.getElementById("cover_fadein");
    console.log(anim);
    anim.beginElement();
    setTimeout(function(){setupGame2()}, 1000);
}

function fadeInGame() {
    var anim = document.getElementById("cover").contentDocument.getElementById("cover_fadeout");
    anim.beginElement();
    console.log(anim);
    setTimeout(function(){fadeInGame2()}, 1000);
}

function fadeInGame2(){
    showHide("cover_div");
}