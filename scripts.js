

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Secshow')
        } else {
            entry.target.classList.remove('Secshow')
        }
    })
})


const ButtonContact = document.querySelector('.ButtonSec9')
const ButtonIcon = document.querySelector('.ContactIcon')


function abrirConversa() {

    const numeroTelefone = "+5511992575048";

    const linkWhatsapp = "https://wa.me/" + numeroTelefone;

    window.open(linkWhatsapp);
}

ButtonContact.addEventListener('click', abrirConversa)
ButtonIcon.addEventListener('click', abrirConversa)


const Mask1 = document.querySelector('.Mask1')
const Mask2 = document.querySelector('.Mask2')

function OpenMask() {
    Mask1.style.transform = `translateX(-105%)`
    Mask2.style.transform = `translateX(200%)`

}

OpenMask()


const AllLi = document.querySelectorAll('.liSec10')

AllLi.forEach((li, e) => {

    li.addEventListener('click', e => {


        if (li.classList.contains('select')) {

            li.querySelector('.liP10').classList.remove('show')
            li.classList.remove('select')
            

        } else {

            li.querySelector('.liP10').classList.add('show')
            li.classList.add('select')

        }

    })

})


const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

function MoveSectionBuy() {
    let Section3 = document.querySelector('.Section9')

    Section3.scrollIntoView({ block: 'start', behavior: 'smooth' })
}



