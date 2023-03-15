$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        }
    }
})
document.querySelector(".owl-nav .owl-prev").innerHTML = "PREV"
document.querySelector(".owl-nav .owl-next").innerHTML = "NEXT"

document.querySelector("header#large-screens .search a").addEventListener("click", function(e){
    e.preventDefault();
    ClickToSearchIcon(this)
})

document.querySelector("header#small-screens a.search").addEventListener("click", function(e){
    e.preventDefault();
    ClickToSearchIcon(this)
})

function ClickToSearchIcon(element){
    if(element.firstElementChild.innerText.includes("search")) element.firstElementChild.innerText = "close"
    else element.firstElementChild.innerText = "search"
    element.nextElementSibling.classList.toggle("active")
}

document.querySelector("header#small-screens a.menu-bar").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("header#small-screens nav").classList.add("active")

    let searchIcon = document.querySelector("header#small-screens a.search")
    if(searchIcon.firstElementChild.innerText.includes("close")) {
        searchIcon.firstElementChild.innerText = "search"
        searchIcon.nextElementSibling.classList.remove("active")
    }
})
document.querySelector("header#small-screens nav a.close").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("header#small-screens nav").classList.remove("active")
})