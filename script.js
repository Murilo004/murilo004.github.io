window.addEventListener("scroll", function () {
    const aside = document.querySelector("aside");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    const asideHeight = aside.offsetHeight;
    const scrollY = window.scrollY;
    const mainRect = main.getBoundingClientRect();
    const mainBottom = main.offsetTop + main.offsetHeight;
    const stopPoint = mainBottom - asideHeight - 30;

    if (window.innerWidth <= 1200) {
        aside.style.position = "static";
        aside.style.top = "0px";
        return;
    }

    if (scrollY < stopPoint) {
        aside.style.position = "fixed";
        aside.style.top = "100px";
    } else {
        aside.style.position = "absolute";
        aside.style.top = stopPoint + "px";
    }
});