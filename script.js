const sectionTop1 = document.querySelector('#sectionTop1')
const sectionTop2 = document.querySelector('#sectionTop2')
const sectionBottom1 = document.querySelector('#sectionBottom1')
const sectionBottom2 = document.querySelector('#sectionBottom2')
const footerPattern = document.querySelector('#footer-pattern')
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const subscribe = document.querySelector('#subscribe')
const input = document.querySelector('#input');
const error = document.querySelector('#error');
window.addEventListener('resize', ()=>{
    if(window.innerWidth <768){
        sectionTop1.setAttribute('src','./images/bg-section-top-mobile-1.svg')
        sectionTop2.setAttribute('src','./images/bg-section-top-mobile-2.svg')
        sectionBottom1.setAttribute('src','./images/bg-section-bottom-mobile-1.svg')
        sectionBottom2.setAttribute('src','./images/bg-section-bottom-mobile-2.svg')
        footerPattern.setAttribute('src','./images/bg-footer-top-mobile.svg')
    }else{
        sectionTop1.setAttribute('src','./images/bg-section-top-desktop-1.svg')
        sectionTop2.setAttribute('src','./images/bg-section-top-desktop-2.svg')
        sectionBottom1.setAttribute('src','./images/bg-section-bottom-desktop-1.svg')
        sectionBottom2.setAttribute('src','./images/bg-section-bottom-desktop-2.svg')
        footerPattern.setAttribute('src','./images/bg-footer-top-desktop.svg')
    }
})
subscribe.addEventListener('click', ()=>{

        if(re.test(input.value)){
        error.style.display = 'none';
        input.style.outline = '2px solid hsl(120, 80%, 39%)';
    }else{
        error.style.display = 'block';
        input.style.outline = '2px solid hsla(0, 100%, 63%, .7)';
    }
})