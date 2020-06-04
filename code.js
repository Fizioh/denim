/* fonction qui cherche élément de contenu h1 et stocke son texte comme chaine de variable */
window.addEventListener("load",function(){
    this.window.lastScrollY= 0;
    var parent = document.querySelector("h1");
    var txt = parent.innerText;
    parseInt.innerText = "";

    /* chaine txt crée en tant qu'enfants individuel de h1 // propriétés de vitesse et de position et opacité aléatoires */
    for(var i=0; i<txt.length; i++){
        var letter = document.createElement("span");
        letter.speed = Math.floor(Math.random()*400)+2;
        letter.originY = letter.y;
        letter.opacity = 1;
        letter.innerText = txt[i];
        letter.style.top = letter.y+"px";
        parent.appendChild(letter);
    }

    this.window.addEventListener("scroll",function(){
        let scrollUp = (window.lastScrollY < window.scrollY ? true : false);
        var nodes = document.querySelectorAll("h1 > *");
        if(window.scrollY < window.screen.height*2)
        {

        }else {

        }
        window.lastScrollY = window.scrollY;
    })

})