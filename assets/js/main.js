//menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show")
        })
    }

}

showMenu("nav-toggle", "nav-menu")

//removeMenu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    //activeLink
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

    //toggleOff
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")

}

navLink.forEach(n => n.addEventListener("click", linkAction))