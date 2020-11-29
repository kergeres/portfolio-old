function gallery (bejon){
   
  

    document.querySelector(".snippet").style.backgroundImage = `url(../img/${bejon}.jpg)`;
   
    console.log(bejon);
    
}

function textAnomatoin() {
    let bottom = document.querySelector(".about-me-bottom-p");
    let introPosition = bottom.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    if (introPosition < screenPosition) {
        bottom.classList.add("about-me-p-show");
    }
}

function textAnomatoin_bottom() {
    let top = document.querySelector(".about-me-top-p");
    let introPosition = top.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    if (introPosition < screenPosition) {
        top.classList.add("about-me-p-show");
    }
}


window.addEventListener("scroll", function () {
    textAnomatoin();
    textAnomatoin_bottom();

});

