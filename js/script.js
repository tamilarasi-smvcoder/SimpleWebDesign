document.addEventListener("DOMContentLoaded",function(){
    /*Menu Button*/
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");

    menuBtn.addEventListener("click",function(){
        sidebar.classList.add("active");
        overlay.classList.add("active");
        menuBtn.style.visibility = "hidden";
    });

    /*Close Button*/
    const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click",function(){
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        menuBtn.style.visibility = "visible";
    });

    /*Overlay Click*/
    overlay.addEventListener("click",function(){
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        menuBtn.style.visibility = "visible";
    });
    /*Sub Menu Button*/
    const subMenuBtns = document.querySelectorAll(".sub-btn");

    subMenuBtns.forEach((btn)=>{
        btn.addEventListener("click", function(event){
            event.preventDefault();
            const container = document.getElementById(this.dataset.container);
            /*console.log(container);*/
            if(!container.classList.contains("active")){
                //Add Rotate to Arrow
                this.querySelector(".dropdown").classList.add("rotate");
                //Add Active to sub menu
                container.classList.add("active");
                container.style.height = "auto";
                const height = container.clientHeight+"px";
                container.style.height = "0px";
                setTimeout(function(){
                    container.style.height = height;
                },0);
            } 
            else{
                //Remove Active from sub menu
                container.style.height = "0px";
                this.querySelector(".dropdown").classList.remove("rotate");
                container.addEventListener("transitionend", function (){
                    container.classList.remove("active");
                },{
                    once:true,
                });
            }
        });
    });
    /* Carousel Functionality */
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= carouselItems.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = carouselItems.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100 + "%";
        carouselInner.style.transform = `translateX(${offset})`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Automatic slide transition
    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
});