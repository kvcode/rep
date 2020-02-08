const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = '';
    } else {
        link.style.animation = `navLinkFade 0.8s ease forwards ${index / 7 + 0.3}s`;
                }
         });
     burger.classList.toggle('toggle');
    });
}

navSlide();

////////////BTN UPDTS//////////////////////////////

const navBtnUpdate = () => {
    //deklarirane na promenlivi i selekcii
    const zaNas = document.querySelector('.zaNas');
    const uslugi = document.querySelector('.uslugi');
    const kontakti = document.querySelector('.kontakti');

    const zn = document.querySelector('.zn');
    const us = document.querySelector('.us');
    const ko = document.querySelector('.ko');

    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const burger = document.querySelector('.burger');


    //zadavane na eventListenerite
    zaNas.addEventListener('click', animationToggle);
    uslugi.addEventListener('click', animationToggle);
    kontakti.addEventListener('click', animationToggle);

    zaNas.addEventListener('click', zaNasF);
    uslugi.addEventListener('click', uslugiF);
    kontakti.addEventListener('click', kontaktiF);

    zn.addEventListener('click', zaNasF);
    us.addEventListener('click', uslugiF);
    ko.addEventListener('click', kontaktiF);


    //deklarirane na funkcii
    function animationToggle() {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.8s ease forwards ${index / 7 + 0.3}s`;
                    }
             });
         burger.classList.toggle('toggle');
    }

    function zaNasF() {
        //deklarirane na promenlivi i selektirane
        let hd1 = document.getElementById("hd1");

        //promqna na DOMa
        hd1.innerHTML = 'ТОВА СМЕ НИЕ';


        //update-vane na klasovete
        uslugi.classList.remove('navBtn-active');
        us.classList.remove('navBtn-active');
        kontakti.classList.remove('navBtn-active');
        ko.classList.remove('navBtn-active');
        zaNas.classList.add('navBtn-active');
        zn.classList.add('navBtn-active');
    }

    function uslugiF() {
        //deklarirane na promenlivi i selektirane
        let hd1 = document.getElementById("hd1");

        //promqna na DOMa
        hd1.innerHTML = 'УСЛУГИТЕ КОИТО ПРЕДЛАГАМЕ СА';


        //update-vane na klasovete
        kontakti.classList.remove('navBtn-active');
        ko.classList.remove('navBtn-active');
        zaNas.classList.remove('navBtn-active');
        zn.classList.remove('navBtn-active');
        uslugi.classList.add('navBtn-active');
        us.classList.add('navBtn-active');
    }

    function kontaktiF() {
        //deklarirane na promenlivi i selektirane
        let hd1 = document.getElementById("hd1");

        //promqna na DOMa
        hd1.innerHTML = 'ЗА КОНТАКТИ С НАС';


        //update-vane na klasovete
        uslugi.classList.remove('navBtn-active');
        us.classList.remove('navBtn-active');
        zaNas.classList.remove('navBtn-active');
        zn.classList.remove('navBtn-active');
        kontakti.classList.add('navBtn-active');
        ko.classList.add('navBtn-active');
    }

    

}

navBtnUpdate();
