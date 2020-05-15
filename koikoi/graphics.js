function fadeOut(){
        var cover = document.getElementById('graphic').contentDocument.getElementById("page_cover");
        cover.style.visibility = "visible";
        console.log("Fading out");
        document.getElementById('graphic').contentDocument.getElementById('cover_fadein').beginElement();
    }