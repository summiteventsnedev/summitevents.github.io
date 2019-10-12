window.addEventListener('scroll', function (evt) {
    let nav = document.getElementById('myTopnav');
    let imageHeight = document.getElementById('logoimg').height;
    if (window.pageYOffset >= imageHeight) {
        nav.style.backgroundColor = '#000';
        nav.style.visibility = 'visible'
        nav.style.opacity = 1;
        nav.style.transition = 'visibility 0.5s, opacity 0.5s linear';
    } else {
        nav.style.visibility = 'hidden';
        nav.style.opacity = 0;
        nav.style.transition = 'visibility 0.5s, opacity 0.5s linear';

    }
});

function closeMobileNav() {
    var ul = document.getElementsByClassName('topnav')[0];
    ul.className = 'topnav';
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        x.style.position = "fixed"
    } else {
        x.className = "topnav";
    }
}
