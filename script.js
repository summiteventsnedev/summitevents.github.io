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

document.addEventListener("DOMContentLoaded", function(){
    var token = '12178400667.dd7ea04.6cee02a6ac544889ba7ca6541f364da0',
        num_photos = 10, // maximum 20
        container = document.getElementById('instafeed'), // it is our <ul id="rudr_instafeed">
        scrElement = document.createElement('script');

    window.mishaProcessResult = function (data) {
        for (x in data.data) {
            container.innerHTML += '<a href="'+data.data[x].link+'"><div><img class="igfeed" src="' + data.data[x].images.low_resolution.url + '"></div></a>';
        }
    }

    scrElement.setAttribute('src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult');
    document.body.appendChild(scrElement);
});