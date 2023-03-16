$('#slider .owl-carousel').owlCarousel({
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

$('#partners .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1
        },
        500:{
            items: 2
        },
        900:{
            items: 4
        },
        1200:{
            items: 6
        }
    }
})

var gallery = new SimpleLightbox('.gallery a', {
    overlay:true,
    captions:true
});
if(document.querySelector(".owl-nav .owl-prev") != null && document.querySelector(".owl-nav .owl-next") != null){
    document.querySelector(".owl-nav .owl-prev").innerHTML = "PREV"
    document.querySelector(".owl-nav .owl-next").innerHTML = "NEXT"
}

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
    document.querySelector("body").classList.add("active")
})
document.querySelector("header#small-screens nav a.close").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("header#small-screens nav").classList.remove("active")
    document.querySelector("body").classList.remove("active")
})

document.querySelectorAll("#projects .menu a").forEach(element => {
    element.addEventListener("click", function(e){
        e.preventDefault();
        let dataId = this.dataset.id
        document.querySelector("#projects .menu a.active").classList.remove("active")
        this.classList.add("active")
        
        document.querySelectorAll("#projects .gallery .item").forEach(item => {
            if (item.dataset.id === dataId || dataId === "0") {
                item.parentElement.classList.remove("d-none")
                item.parentElement.classList.add("d-block")
            }
            else{
                item.parentElement.classList.remove("d-block")
                item.parentElement.classList.add("d-none")
            }
        })
    })
});