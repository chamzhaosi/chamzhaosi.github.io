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

    const container = document.getElementById('working_container');
  
    container.addEventListener('wheel', function(e) {
        // Store the initial scroll position
        const initialScrollLeft = container.scrollLeft;
      
        // Attempt to scroll horizontally: positive deltaY scrolls right, negative scrolls left
        container.scrollLeft += e.deltaY;
      
        // Check if the scroll position has changed after the attempt
        if (!(container.scrollLeft === initialScrollLeft)) {
            // Prevent default scroll behavior (vertical scrolling) if we were able to scroll horizontally
            e.preventDefault();
        }
        
      }, { passive: false }); // Note: The passive option is necessary to be able to preventDefault inside wheel event listeners.

});
