function playClick(){

    const sound =
    document.getElementById("clickSound");

    sound.currentTime = 0;

    sound.play();

}

/* HOVER SOUND */

const links =
document.querySelectorAll("nav a");

const hoverSound =
document.getElementById("hoverSound");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        hoverSound.currentTime = 0;

        hoverSound.play();

    });

});

/* CURSEUR */

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",
(e)=>{

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

});

/* APPARITION AU SCROLL */

window.addEventListener("scroll", reveal);

function reveal(){

    const reveals =
    document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveals[i]
        .getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveals[i]
            .classList.add("active");

            const title =
            reveals[i].querySelector("h2");

            if(title){

                title.classList.add(
                "title-visible"
                );

            }

        }

    }

}

reveal();