document.getElementById('header-burger').onclick = function() {
    document.getElementById('header-burger').classList.toggle('active');
    document.getElementById('heaer-content-nav').classList.toggle('active');
    // document.getElementById('nav-link').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
    if (document.getElementById('header-burger').classList.contains('active')) {
        document.getElementById('main').style = 'opacity: 0.3; transition-duration: 0.3s;';
    } else {
        document.getElementById('main').style = 'opacity: 1; transition-duration: 0.3s;';
    };
  };



// document.getElementById('nav-link1').onclick = function () {
//     document.getElementById('header-burger').classList.remove('active');
//     document.getElementById('heaer-content-nav').classList.remove('active');
//     document.getElementById('body').classList.remove('lock');
//     document.getElementById('main').style = 'opacity: 1; transition-duration: 0.3s;';
// };

function burgerCls() {
    document.getElementById('header-burger').classList.remove('active');
    document.getElementById('heaer-content-nav').classList.remove('active');
    document.getElementById('body').classList.remove('lock');
    document.getElementById('main').style = 'opacity: 1; transition-duration: 0.3s;';
}

document.getElementById('nav-link').onclick = function () {
    burgerCls()
};

document.getElementById('nav-link1').onclick = function () {
    burgerCls()
};

document.getElementById('nav-link2').onclick = function () {
    burgerCls()
};

document.getElementById('nav-link3').onclick = function () {
    burgerCls()
};

document.getElementById('nav-link4').onclick = function () {
    burgerCls()
};
