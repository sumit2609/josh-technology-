//dish-modal-button
var dishmodalbtn = document.querySelector('.dish-button');
var dishmodalbg = document.querySelector('.dish-modal-bg');
var modalClose = document.querySelector('.modal-close');
var cancelbutton = document.querySelector('.dishmodal-button1');
var submitRequest = document.querySelector('.dishmodal-button2');

dishmodalbtn.addEventListener('click',function(){
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    dishmodalbg.classList.add('dish-bg-active');
});

modalClose.addEventListener('click',function(){
    document.body.style.position = '';
    document.body.style.top = '';
    document.getElementById('dishname').value = '';
    document.getElementById('dishurl').value = '';
    dishmodalbg.classList.remove('dish-bg-active');
});

cancelbutton.addEventListener('click',function(){
    document.body.style.position = '';
    document.body.style.top = '';
    document.getElementById('dishname').value = '';
    document.getElementById('dishurl').value = ''
    dishmodalbg.classList.remove('dish-bg-active');
});

submitRequest.addEventListener('click',function(){
    document.body.style.position = '';
    document.body.style.top = '';
    document.getElementById('dishname').value = '';
    document.getElementById('dishurl').value = ''
    dishmodalbg.classList.remove('dish-bg-active');
});

// cart-modal-button
var cartbutton = document.querySelector('#cart-button');
var cartmodalbg = document.querySelector('.cart-modal-bg')
var backtomenu = document.querySelector('.cart-button');
var cartmodalclose = document.querySelector('.cart-modal-close');

var body = document.querySelector('*');
var modalopen = document.querySelector('.modal-open');

cartbutton.addEventListener('click',function(){
    console.log("hii")
    // body.classList.add('modalopen')
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    cartmodalbg.classList.add('cart-bg-active')
});
backtomenu.addEventListener('click',function(){
    document.body.style.position = '';
    document.body.style.top = '';
    cartmodalbg.classList.remove('cart-bg-active');
});
cartmodalclose.addEventListener('click',function(){
    document.body.style.position = '';
    document.body.style.top = '';   
    cartmodalbg.classList.remove('cart-bg-active');
});

// iframe video

var playbutton = document.querySelector('.iframe-img2');
var iframeimg =  document.querySelector('.iframe-image');
var iframe =  document.querySelector('.iframe');

playbutton.addEventListener('click',function(){
    console.log("hello")
    playbutton.classList.add('displaynone')
    iframeimg.classList.add('displaynone')
    // document.getElementsByClassName('iframe').src += "?autoplay=1";
    iframe.classList.add('displayblock');
})


// slider

addEventListener('load',()=>{
    const slider=document.querySelector('.top-deals-slider');
    const sliderimg = document.querySelectorAll('.top-deals-slider li');
    const leftbtn=document.querySelector('.left-btn');
    const rightbtn=document.querySelector('.right-btn');

    const temp=slider.clientWidth/100;let counter=1;

    console.log(temp);

    const size =sliderimg[0].clientWidth+(temp*2);
    slider.style.transform='translateX('+(-size*counter)+'px)';

    var timer=setInterval(function(){
        counter++;
        slider.style.transition="transform .4s ease-in-out";
        slider.style.transform='translateX('+(-size*counter)+'px)';
    },3000);

    rightbtn.addEventListener('click',()=>{
        clearTimeout(timer);
        if(counter+3>=sliderimg.length)return;
        slider.style.transition='transform .4s ease-in-out';
        counter++;
        slider.style.transform='translateX('+(-size*counter)+'px)';
        timer=setInterval(function(){
        counter++;
        slider.style.transition="transform .4s ease-in-out";
        slider.style.transform='translateX('+(-size*counter)+'px)';
        },3000);
    });
    leftbtn.addEventListener('click',()=>{
        clearTimeout(timer);
        if(counter<=0)return;
        slider.style.transition='transform .4s ease-in-out';
        counter--;
        slider.style.transform='translateX('+(-size*counter)+'px)';
        timer=setInterval(function(){
        counter++;
        slider.style.transition="transform .4s ease-in-out";
        slider.style.transform='translateX('+(-size*counter)+'px)';
        },3000);
    });
    slider.addEventListener('transitionend',()=>{
        if(sliderimg[counter+2].id==='firstdeal'){
            slider.style.transition="none";
            counter=1;
            slider.style.transform='translateX('+(-size*counter)+'px)';
        }
        if(sliderimg[counter].id==='lastdeal'){
            slider.style.transition="none";
            counter=4;
            slider.style.transform='translateX('+(-size*counter)+'px)';
        }
        
    });

});