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

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

    window.addEventListener('scroll', function(event) {
        if (document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);   
        }
    });
}