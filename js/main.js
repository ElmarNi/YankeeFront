

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("d-none")
        document.querySelector("body").classList.remove("active")
        setHeightForServiceDiv()
    }, 1000);
    
    document.querySelector("#goToUp").addEventListener("click", function(e){
        e.preventDefault();
        window.scrollTo({top: 0});
    })

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
    
    new SimpleLightbox('.gallery a', {
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
    document.addEventListener("scroll", function(e){
        if (window.scrollY > 200) document.querySelector("#goToUp").classList.add("active")
        else document.querySelector("#goToUp").classList.remove("active")
    })
    document.querySelectorAll("#servicesMainPage .left a").forEach(element => {
        element.addEventListener("click", function(e){
            e.preventDefault();

            document.querySelector("#servicesMainPage .left a.active").classList.remove("active")
            document.querySelector("#servicesMainPage .right .item.active").classList.remove("active")
            this.classList.add("active")
            document.querySelector(`#servicesMainPage .right .item[data-id="${this.dataset.id}"]`).classList.add("active")

            setHeightForServiceDiv();
        })
    });

    window.addEventListener("resize", function(e){
        setHeightForServiceDiv()
    })

    document.querySelector(".searchLabel form button").addEventListener("click", function(e){
        e.preventDefault()
        window.location.pathname = "/error.html"
    })

    window.addEventListener("click", function(e){
        console.log(e.target);
        if(e.target != document.querySelector("nav.active") 
            && e.target != document.querySelector("nav.active .logo img") 
            && e.target != document.querySelector(".menu-bar span")){

            document.querySelector("header#small-screens nav").classList.remove("active")
            document.querySelector("body").classList.remove("active")
        }
    })

    function setHeightForServiceDiv() {
        if(document.querySelector("#servicesMainPage .right .item.active") != null){
            let serviceDiv = document.querySelector("#servicesMainPage .right .item.active")
            serviceDiv.parentElement.style.height = `${serviceDiv.clientHeight}px`
        }
    }

    function ClickToSearchIcon(element){
        if(element.firstElementChild.innerText.includes("search")) element.firstElementChild.innerText = "close"
        else element.firstElementChild.innerText = "search"
        element.nextElementSibling.classList.toggle("active")
    }
});

