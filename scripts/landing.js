var pointsArray = document.getElementsByClassName('point');

function revealPoint(p){
    p.style.opacity = 1;
    p.style.transform = "scaleX(1) translateY(0)";
    p.style.msTransform = "scaleX(1) translateY(0)";
    p.style.WebkitTransform = "scaleX(1) translateY(0)";  
}

function animatePoints(p) {  
    forEach(p, revealPoint);
};

$(window).load(function() {
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

    if ($(window).height() > 950) {
        animatePoints(pointsArray);
    }

    $(window).scroll(function(event) {
        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        }
    });
});