/* fonction qui cherche élément de contenu h1 et stocke son texte comme chaine de variable */
window.addEventListener("load",function(){
    window.lastScrollY= 0;
    var parent = document.querySelector("h1");
    var txt = parent.innerText;
    parent.innerText = "";

    /* chaine txt crée en tant qu'enfants individuel de h1 // propriétés de vitesse et de position et opacité aléatoires */
    for(var i=0; i<txt.length; i++){
        var letter = document.createElement("span");
        letter.speed = Math.floor(Math.random()*10)+2;
        letter.y = Math.floor(Math.random()*400)+2;
        letter.originY = letter.y;
        letter.opacity = 1;
        letter.innerText = txt[i];
        letter.style.top = letter.y+"px";
        parent.appendChild(letter);
    }

    window.addEventListener("scroll",function(){
        let scrollUp = (window.lastScrollY < window.scrollY ? true : false);
        var nodes = document.querySelectorAll("h1 > *");
        if(window.scrollY < window.screen.height*2){
            for(var i=0; i< nodes.length; i++){
                var speed = nodes[i].speed;
                if (scrollUp == true){
                    nodes[i].y -= speed;
                    if(nodes[i].y <= 0)
                        nodes[i].y = 0;
                }else{
                    nodes[i].y += speed;
                    if(nodes[i].y > nodes[i].originY)
                    nodes[i].y = nodes[i].originY;
                }
                nodes[i].style.top = nodes[i].y+"px";
            }
        }else{
            for(var i=0; i<nodes.length; i++){
                if(scrollUp == true && nodes[i].opacity > 0)
                nodes[i].opacity -= 1/(1+i*10);
                else if(scrollUp == false && nodes[i].opacity < 1)
                nodes[i].opacity += 1/(1+i*10);

                nodes[i].style.opacity = nodes[i].opacity;
            }
        
    }
        window.lastScrollY = window.scrollY;
    });

        });