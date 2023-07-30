const hamburger = document.querySelector(".hamburger");
const container = document.querySelectorAll(".menu-container");
const a = document.querySelectorAll('.menu a');

hamburger.addEventListener("click" ,() =>{

    const span = document.querySelectorAll(".not-clicked");
    const span2 = document.querySelectorAll(".clicked");
    const body = document.querySelector("body");

    if(span.length !== 0){
        var count = 0;
        console.log(container);
        container[0].classList.add("show");
        body.classList.add("overflow-remove");
        span.forEach(element => {
            count = count + 1;
            element.classList.remove("not-clicked");
            element.classList.add("clicked");
            if(count === 2){
                element.classList.add("clicked-second");
            }
            return;
    });
    }

    else if(span2.length !== 0){
        var count = 0;
        container[0].classList.remove("show");
        body.classList.remove("overflow-remove");
        console.log(container[0]);
        span2.forEach(element => {
            count = count + 1;
            element.classList.remove("clicked");
            element.classList.add("not-clicked");

            if(count === 2){
                element.classList.remove("clicked-second");
            }
            return;
    });
    }
})


a.forEach(element =>{
    element.addEventListener("click" , () =>{
        const body = document.querySelector("body");
        const span2 = document.querySelectorAll(".clicked");
        if(span2.length !== 0){
            var count = 0;
            container[0].classList.remove("show");
            body.classList.remove("overflow-remove");
            span2.forEach(element => {
                count = count + 1;
                element.classList.remove("clicked");
                element.classList.add("not-clicked");
    
                if(count === 2){
                    element.classList.remove("clicked-second");
                }
                return;
        });
        }
    })
})