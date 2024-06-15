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