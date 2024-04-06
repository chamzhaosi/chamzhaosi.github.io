document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        const header = this.document.getElementById("header");

        if (scrollPosition > 10){
            header.classList.add("header-visible");
        }else{
            header.classList.remove("header-visible");
        }

    });

});
