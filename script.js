const themeBtn = document.querySelectorAll('.theme-btn')
console.log(themeBtn)

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', function () {
    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')

    for (let i = 0; i < themeBtn.length; i++) {

      themeBtn[i].classList.toggle('light')
      themeBtn[i].classList.toggle('dark')
    }
  })
}
