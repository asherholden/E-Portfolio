let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20 

function toggleContrast() {
    contrastToggle = !contrastToggle
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    
    for(let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visable"
    emailjs.sendForm(
         'service_z2x2oza',
         'template_r7w45ar',
          event.target, 
          'ez1nt_ubactl8IcNL'
    ).then(() => {
     loading.classList.remove("modal__overlay--visable")
     success.classList += " modal__overlay--visable";
    }).catch(() => {
    loading.classList.remove("modal__overlay--visable")
    alert(
     "The email service is temporarily unavailable. please contact me directly at asherholden151@gmail.com"
     )
 })
}

function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}

