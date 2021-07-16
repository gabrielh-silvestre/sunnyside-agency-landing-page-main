var widthMatch = window.matchMedia("(max-width: 1023px)"); // ref: https://stackoverflow.com/questions/45947570/how-to-attach-an-event-listener-to-the-dom-depending-upon-the-screen-size

if (widthMatch.matches) {
    var header_menu = document.getElementsByClassName("collapse")[0];
    header_menu.style.display = "none"

    document.getElementById("hamburger").addEventListener("click", () => {
        if (header_menu.style.display === "none") {
            header_menu.style.display = "block"
        } else {
            header_menu.style.display = "none"
        }
    })
}
