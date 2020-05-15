function fadeOut(elem) {
    var anim = document.createAttribute("animate");
    anim.attributeName = "opacity";
    anim.attributeType = "CSS";
    anim.from = "1";
    anim.to = "0";
    anim.dur = "2s";
    anim.fill = "freeze";
    document.getElementById(elem).appendChild(anim);
}