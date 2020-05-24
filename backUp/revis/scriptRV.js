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

    burger.addEventListener('click', animationToggle);

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
            link.style.animation = `navLinkFade 0.8s ease forwards ${index / 6 + 0.4}s`;
                    }
             });
         burger.classList.toggle('toggle');
    }

    function zaNasF() {
        //promqna na DOMa
        contbc.innerHTML = `<div class="content">
        <div class="content-container cc1">
        <h1 id="hd1">За Нас</h1>
          <ul class="list-kontakti">
                <p class="pZaNas">Ревис-Русе е основана през 1997 година с основна дейност пренавиване и ремонт на 
                електродвигатели, трансформатори, електрически спирачки и друг вид бобинажни услуги. 
                От 2007 година фирмата предлага на своите клиенти ремонт на стартери, алтернатори, 
                мотор-вентилатори, мотори за чистачки и стъклоповдигане. 
                Също така при нас може да ремонтирате вашата професионална, градинска и битова техника 
                (ъглошлайфи, перфоратори, дрелки, къртачи, генератори за ток, косачки за трева, храсторези и други).
                Фирмата предлага всички резервни части за електродвигатели (лагери, клемни табла и кутии, 
                вентилатори перки и капаци, ремъчни шайби и други), резервни части за стартери,
                алтернатори и професионална техника.</p>
          </ul>
        </div>    
        <div id="zaNasHale">
          <img class="zaNasImg" src="https://raw.githubusercontent.com/kvcode/rep/master/img/RevisHale.jpg">
        </div>
        </div>`;

        //update-vane na klasovete
        uslugi.classList.remove('navBtn-active');
        us.classList.remove('navBtn-active');
        kontakti.classList.remove('navBtn-active');
        ko.classList.remove('navBtn-active');
        zaNas.classList.add('navBtn-active');
        zn.classList.add('navBtn-active');
    }

    function uslugiF() {
        //promqna na DOMa
        contbc.innerHTML = `<h3 id="hd3">Всичко за вашия електродвигател.</h3>       
        <div class="content">
          <div class="content-container cc1">
            <h2>Пренавиване:</h2>
              <ul>
                  <li>Електродвигатели 220V/380V</li>
                  <li>Електродвигатели 12V/24V</li>
                  <li>Правотокови Машини</li>
                  <li>Бобинажни услуги</li>
                  <li>Трансформатори</li>
              </ul>
              <img class= "mainImg" src="https://raw.githubusercontent.com/kvcode/rep/master/img/motoRV.jpg">
            </div>    
            <div class="content-container cc2">
            <h2>Ремонт на:</h2>
              <ul>
                  <li>Стартери</li>
                  <li>Алтернатори</li>
                  <li>Вентилатори</li>
                  <li>Професионална, битова <br>и градинска техника</li>
              </ul>
        <img class="mainImg"  src="https://raw.githubusercontent.com/kvcode/rep/master/img/dvigatelRV.jpg">
          </div>
        </div>`

        //update-vane na klasovete
        kontakti.classList.remove('navBtn-active');
        ko.classList.remove('navBtn-active');
        zaNas.classList.remove('navBtn-active');
        zn.classList.remove('navBtn-active');
        uslugi.classList.add('navBtn-active');
        us.classList.add('navBtn-active');
    }


    
    let contbc = document.querySelector('.contbc');


    function kontaktiF() {
        //promqna na DOMa
        contbc.innerHTML = `<div class="content">
        <div class="content-container cc1">
            <h1 id="hd1">Контакти</h1>
            <ul class="list-kontakti">
                <li><strong>Телефон: </strong>0888673925 / 0892004013</li>
                <li><strong>Е-мейл: </strong><a href="mailto:revisruse@abv.bg">revisruse@abv.bg</a></a></li>
                <li><strong>Facebook: </strong><a href="https://www.facebook.com/revisruse/">Revis Ruse / Ревис Русе</a></a></li>
                <li><strong>Адрес: </strong>гр. Русе бул.Гоце Делчев 78</li>
            </ul>
            <img class= "mainImg" src="./img/RevisHale.jpg">
          </div>    
          <div>
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.6701180280062!2d25.970332588111408!3d43.82098679868833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae5e2962c610f9%3A0xd0f4eda31ba5e9b6!2zYnVsLiAiR290c2UgRGVsY2hldiIgOTAsIDcwMTYg0LIu0LcuINCX0LDQv9Cw0LQsIFJ1c2U!5e0!3m2!1sen!2sbg!4v1581439748736!5m2!1sen!2sbg" width="550" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
        </div>`


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




/* const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = '';
    } else {
        link.style.animation = `navLinkFade 1s ease forwards ${index / 6 + 0.4}s`;
                }
         });
     burger.classList.toggle('toggle');
    });
}

navSlide(); */

//ES6 Loop if class === smth
/*



*/
