function clicarMenu() {
    let menuMobile = document.querySelector('.menu-mobile')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "imagens/list-menu.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "imagens/remove-menu.png"
    }
}