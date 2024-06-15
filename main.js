//cattura elementi
let myNavbar = document.querySelector("#myNavbar");
let link = document.querySelectorAll(".nav-link");
let logo = document.querySelector(".img-logo");


console.dir(logo);

console.log(window);

window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        changeNavbar('nav-blur', 'logo-bianco', 'var(--white)', '2px solid var(--gold)', 'transparent');
    } else {
        myNavbar.classList.remove('nav-blur');
        changeNavbar('nav-custom', 'logo-nero', 'var(--black)', 'transparent', 'transparent');
    };

});

function changeNavbar(background, imglogo, color1, color2, color3) {
    myNavbar.classList.add(background);
    logo.src = `http://127.0.0.1:5500/repositary/${imglogo}.png`;


    link.forEach((link) => {
        link.style.color = color1;
        link.addEventListener("mouseenter", () => {
            link.style.borderBottom = color2;
        });
        link.addEventListener("mouseleave", () => {
            link.style.borderBottom = color3;
        });
    });
};


/* le chiamate asincrone in js sono un metodo che aspetta prima il caricamento della pagina e poi parte la chiamata (html, css, js non asincrono e alla fine la chiamata asincrona) setInterval()
cleatInterval blocca l'intervallo ma ha bisogno di un parametro che rappresenti l'intervallo stesso */
/* interseptionObserver() è un oggetto che ci permette di attivare un qualcosa quando l'utente arriva ad un determinato punto. */



let firstNumber = document.querySelector("#firstNumber")
let secNumber = document.querySelector("#secNumber")
let terNumber = document.querySelector("#terNumber")


let count = 0;
/* con funzione si rende generale e si richiama il singolo */
function createInterval(number, element, timing) {
    let count = 0;
    let interval = setInterval(
        () => {
            /* set di istruzioni */
            if (count < number) {
                count++
                element.innerHTML = count;
            } else {
                clearInterval(firstNumber);
            }
        }, timing)
};

let confirm = false;


let observer = new IntersectionObserver(
    (enrties) => {
        enrties.forEach((entry) => {
            if (entry.isIntersecting && confirm == false) {
                createInterval(380, firstNumber, 20);
                createInterval(256, secNumber, 20);
                createInterval(250, terNumber, 20);
                confirm = true
            }
        }
        )
    }

);
observer.observe(firstNumber);



/* swiper js struttura */

const swiper = new Swiper('.swiper', {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* recensioni */


let reviews = [
    { name : "Elia" , title : "La mia piu' bella esperienza", description: "bellissima esperienza personale gentile, preparato, rapido , prezzi onestissimi" },
    { name : "Vincinzo" , title : "Pessima esperienza", description: "sito digustoso e poco professionale" },
    { name : "Laura" , title : "Esperienza COOL", description: "Accoglienza top, qualita' prodotti eccellente, lenta la spedizione " },
];

let swiperWrapper = document.querySelector(".swiper-wrapper");
let addReviews = document.querySelector("#addReviews");
let userName = document.querySelector("#userName");
let userTitle = document.querySelector("#userTitle");
let userDescription = document.querySelector("#userDescription");


function generateCars() {
    swiperWrapper.innerHTML= '';
    reviews.forEach((review) => {
        let div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <div class="title" data-swiper-parallax="-300">${review.name}</div>
        <div class="subtitle" data-swiper-parallax="-200">${review.title}</div>
        <div class="text" data-swiper-parallax="-100">
          <p>
            ${review.description}
          </p>
        </div>
        `
        swiperWrapper.appendChild(div);
    });
}
generateCars();

addReviews.addEventListener("click", ()=>{
    reviews.push( { name : userName.value , title : userTitle.value, description: userDescription.value });
    generateCars();
    userName.value = '';
    userTitle.value= '';
    userDescription.value= '';
    swiper.update();
})
