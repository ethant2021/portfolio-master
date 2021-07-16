let ethan = document.querySelector('.name');
let projects = document.querySelector('.projTitle');
let contacts = document.querySelector('.contactTitle');
let cert = document.querySelector('.certTitle');
let about = document.querySelector('.aboutTitle');

let anim = [

    { t: "0", ms: 250 },
    { t: "00", ms: 250 },
    { t: "000", ms: 250 },
    { t: "0000", ms: 250 },
    { t: "00000", ms: 250 },
    { t: "000000", ms: 250 },
    { t: "0000000", ms: 250 },
    { t: "00000000", ms: 250 },
    { t: "000000000", ms: 250 },
    { t: "0000000000", ms: 250 },
    { t: "00000000000", ms: 250 },
    { t: "000000000000", ms: 250 },
    { t: "0000000000000", ms: 250 },
    { t: "00000000000000", ms: 250 },
    { t: "34596349345699", ms: 300 },
    { t: "45004y02034258", ms: 300 },
    { t: "56115z13040643", ms: 300 },
    { t: "grb308iy0360js", ms: 300 },
    { t: "-9ghq3-unvgon4", ms: 300 },
    { t: "eaowud1o5u35d3", ms: 300 },
    { t: "eterih642nfo8n", ms: 300 },
    { t: "etsrthyjr3gadw", ms: 300 },
    { t: "ethjrujry7!f65", ms: 300 },
    { t: "etharsrthrs4z5", ms: 300 },
    { t: "ethan9awd91gdl", ms: 300 },
    { t: "ethan24htrhwa0", ms: 300 },
    { t: "ethan t0358d90", ms: 300 },
    { t: "ethan thhtw03a", ms: 300 },
    { t: "ethan tha013na", ms: 300 },
    { t: "ethan thac3nf2", ms: 300 },
    { t: "ethan thack42e", ms: 300 },
    { t: "ethan thacke91", ms: 300 },
    { t: "ethan thacker9", ms: 300 },
    { t: "ethan thackery", ms: 300 },


];
let timeCheck = 1;
if (localStorage.timeCheck)
    timeCheck = localStorage.timeCheck;
let i = 0;
let update = () => {
    let step = anim[i];
    ethan.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / timeCheck);
    else {
        ethan.classList.add('smaller');
        ethan.classList.remove('name');
    altSolution();
    altSolution2();

        $(".cover").hide(1500);
        $(".about").show(2000);

        localStorage.timeCheck = 2;
    }
}
update();

function change(){
projects.classList.add('comeInprojTitle');
projects.classList.remove('projTitle');

}
function change2(){
contacts.classList.add('comeInContactTitle');
contacts.classList.remove('contactTitle');
}

function change3(){
    cert.classList.add('comeInCertTitle');
    cert.classList.remove('certTitle');
    }


    function change4(){
        about.classList.add('comeInaboutTitle');
        about.classList.remove('aboutTitle');
        }

        function altSolution (){
            setTimeout(change, 1000);
            setTimeout(change3, 2000);
        }
        function altSolution2 (){
            setTimeout(change4, 500);
            setTimeout(change2, 1500);
        }