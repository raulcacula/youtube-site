var items = document.querySelector('.bar-lateral')
var barI = document.querySelector('.bars')


function closeFechar(){
    if(items.style.display = 'none'){

    }
}

function barLibera(){
    if(items.style.display = 'flex'){

    }
}

const wrapper = document.querySelector('.genero-items')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
    pressed = true 
    startX = e.clientX
    this.style.cursor = 'grabbing'
})


wrapper.addEventListener('mouseleave', function (e) {
    pressed = false
})

window.addEventListener('mouseup', function (e) {
    pressed = false
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
    if(!pressed){
       return
    }

    this.scrollLeft += startX - e.clientX

    
})
var search = document.querySelector('.search-box')
var items = document.querySelector('.items-nav')
var nav = document.querySelector('.nav-box')
var seta = document.querySelector('.voltar')
function searchMobile(){
    var search = document.querySelector('.search-box')
    var items = document.querySelector('.items-nav')
    var nav = document.querySelector('.nav-box')
    var seta = document.querySelector('.voltar')

    if(search.style.display = 'block'){
        items.style.display = 'none'
        nav.style.display = 'none'
        seta.style.display = 'flex'
    }
}

function voltar(){
var search = document.querySelector('.search-box')
var items = document.querySelector('.items-nav')
var nav = document.querySelector('.nav-box')
var seta = document.querySelector('.voltar')

    if(seta = search.style.display = 'none'){
        items.style.display = 'flex'
        nav.style.display = 'flex'
    }
}