

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#contact input[type='submit']").addEventListener("click", function(e){
        document.querySelectorAll("#contact .item input").forEach(input => {
            if (checkInputValue(input)) {
                e.preventDefault();
            }
        });
        if (checkInputValue(document.querySelector("#contact #message"))) {
            e.preventDefault()
        }
        if(document.querySelector('#contact .item input:focus') != null){
            document.querySelector('#contact .item input:focus').blur();
        }
    })

    document.querySelectorAll("#contact .item input").forEach(input => {
        input.addEventListener("focus", function(){
            inputOnFocus(this)
        })
    });

    document.querySelector("#contact #message").addEventListener("focus", function(){
        inputOnFocus(this)
    })

    document.querySelectorAll("#contact .item p").forEach(element => {
        element.addEventListener("click", function(){
            element.previousElementSibling.focus()
        })
    });

    function checkInputValue(element){
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let numberFormat = /^\d+$/;
        if (element.value === "" || (element.id == "email" && !mailformat.test(element.value)) || (element.id == "number" && !numberFormat.test(element.value))) {
            element.classList.add("active")
            element.nextElementSibling.nextElementSibling.classList.add("active")
            return true;
        }
        else{
            element.classList.remove("active")
            element.nextElementSibling.nextElementSibling.classList.remove("active")
        }
    }

    function inputOnFocus(element){
        element.nextElementSibling.classList.add("active")
    }

    function inputOutFocus(element, event){
        if(element.value === "" && event.target != element && event.target != element.nextElementSibling){
            element.nextElementSibling.classList.remove("active")
        }
    }
});

