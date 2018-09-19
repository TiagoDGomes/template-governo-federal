
CarouselClass = function(itemSelector, speed=15000){
    this._carousel = document.querySelectorAll(itemSelector)[0];
    this.slides = this._carousel.querySelectorAll('.slides').length;
    this.speed = speed;
    var thisCarousel = this;
    this.hide = function(num) {
        thisCarousel.indicators[num].classList.remove('active');
        thisCarousel.slides[num].classList.remove('active');
        thisCarousel.slides[num].style.opacity=0;
    };

    this.show = function(num) {
        thisCarousel.indicators[num].classList.add('active');
        thisCarousel.slides[num].classList.add('active');
        thisCarousel.slides[num].style.opacity=1;
    };

    this.set = function(slide) {
        return function() {
            // Reset all slides
            for (var i = 0; i < thisCarousel.indicators.length; i++) {
                thisCarousel.indicators[i].classList.remove('active');
                thisCarousel.slides[i].classList.remove('active');                  
                thisCarousel.hide(i);
            }
            // Set defined slide as active
            thisCarousel.indicators[slide].classList.add('active');
            thisCarousel.slides[slide].classList.add('active');
            thisCarousel.show(slide);

            // Stop the auto-switcher
            clearInterval(thisCarousel.switcher);
        };
    };

    this.switch = function() {
        var nextSlide = 0;

        // Reset all slides
        for (var i = 0; i < thisCarousel.indicators.length; i++) {
            // If current slide is active & NOT equal to last slide then increment nextSlide
            if ((thisCarousel.indicators[i].classList.contains('active')) && (i !== (thisCarousel.indicators.length-1))) {
                nextSlide = i + 1;
            }
            // Remove all active states & hide
            thisCarousel.hide(i);
        }
        // Set next slide as active & show the next slide
        thisCarousel.show(nextSlide);
    };
    this.start = function(){
        carousel = thisCarousel._carousel
        thisCarousel.slides = carousel.querySelectorAll('.slide');
        thisCarousel.indicators = carousel.querySelectorAll('.indicators li');

        thisCarousel.switcher = setInterval(function() {
            thisCarousel.switch();
        }, thisCarousel.speed);

        for (var i = 0; i < thisCarousel.indicators.length; i++) {
            thisCarousel.indicators[i].addEventListener("click", thisCarousel.set(i));
        }
    };
}