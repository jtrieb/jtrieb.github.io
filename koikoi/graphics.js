//var tableX = [111.619, 141.762, 171.905, 202.048, 232.190, 81.476];
//var tableY = [-108.64, -63.64]

var tableX = [49.788, 80.372, 110.957, 141.541, 172.126, 202.710, 233.294, 263.879, 294.463]
var tableY = -86.140

function fadeOutIntro() {
    console.log("fadeOutIntro")
    showHide("cover_div");
    //setTimeout(function(){fadeOutIntro2()}, 1000);
    fadeOutIntro3(0);
}

function fadeOutIntro2(){
    console.log("fadeOutIntro2")
    var anim = document.getElementById("cover").contentDocument.getElementById("cover_fadein");
    console.log(anim);
    anim.beginElement();
    setTimeout(function(){setupGame2()}, 1000);
}

function fadeOutIntro3(i){
    var anim = document.getElementById("cover").contentDocument.getElementById("cover_fadein");
    if(anim == null) {
        setTimeout(function(){fadeOutIntro3(i+1)}, 250);
    } else {
    console.log(anim);
    anim.beginElement();
    setTimeout(function(){setupGame2()}, 1000);
    }
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

function toFront(elem){
        //var elem = document.getElementById(e);
        var parent = elem.parentNode;
        parent.removeChild(elem);
        parent.appendChild(elem);
    }

    function view(elem){
        //var elem = document.getElementById(e);
        var parent = elem.parentNode;
        var newElem = elem.cloneNode('true');
        newElem.id = newElem.id + '_v';
        newElem.removeAttribute('onmouseover');
        newElem.setAttribute('onmouseout', 'unview(this.id)');
        //var transform = newElem.getAttribute('transform') + 'scale(1.2) translate(10, 10)';
        //console.log(transform);
        //newElem.setAttribute('transform', transform);
        parent.appendChild(newElem);
    }

    function unview(elem){
        //var elem = document.getElementById(e);
        var parent = elem.parentNode;
        parent.removeChild(elem);
    }