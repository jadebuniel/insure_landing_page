const hamburger = document.querySelector('.hamburger')
const navContainer = document.querySelector('.nav-container')
hamburger.addEventListener('click', () => {
 if (navContainer.classList.contains(`h-0`)){
   navContainer.classList.remove('h-0')
   navContainer.classList.add('h-screen')
   hamburger.src = `./images/icon-close.svg`
 } else {
   navContainer.classList.remove('h-screen')
   navContainer.classList.add('h-0')
   hamburger.src = `./images/icon-hamburger.svg`
 }
})