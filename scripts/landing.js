var pointsArray = document.getElementsByClassName('point');

var animatePoints = function() {    
    function revealPoint(p){
        for(i=0; i<p.length; i++){
            p[i].style.opacity = 1;
            p[i].style.transform = "scaleX(1) translateY(0)";
            p[i].style.msTransform = "scaleX(1) translateY(0)";
            p[i].style.WebkitTransform = "scaleX(1) translateY(0)";  
        }
    };
    revealPoint(pointsArray);
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