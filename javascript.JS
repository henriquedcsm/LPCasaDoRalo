document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelectorAll('.carousel');
    myCarousel.forEach(function(carousel) {
        var bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 1000000,
            wrap: true
        });
    });
});





