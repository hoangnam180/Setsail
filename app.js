window.addEventListener("load",function(){
    const slides = document.querySelectorAll('.mySlides');
    const btnPre = document.querySelector('.arrow-left');
    const btnNext= document.querySelector('.arrow-right');
    const package_item = document.querySelectorAll('.package-item-wrap');
    const package_items = document.querySelector('.package-items');
    const dot1next = document.querySelector('.dot1.next');
    const dot1prev = document.querySelector('.dot1.prev');
    const [...dotList] = document.querySelectorAll('.dots .dot2');
    const parallaxs = document.querySelectorAll('.parallax-wrap');
    const parallaxswrap = document.querySelector('.parallax-w');
    const package_length= package_item.length;
    const parallaxs_leng = parallaxs.length;
    const navList = document.querySelector('.bottom-header-nav');
    const navOpen = document.querySelector('.bar-mobile');
    const [...ListItems] = document.querySelectorAll('.bottom-header-item');
    const Itemsubnav = document.querySelectorAll('.bottom-header-subnav');
    const [...Listsubnavinner] = document.querySelectorAll('.bottom-header-subnav-item.js');
    const Itemsubnavinner = document.querySelectorAll('.bottom-header-subnav-inner');
    const Itemslink = document.querySelector('.bottom-header-item-link');
    const arow = document.querySelectorAll('.arow-nav');
    const arowinner = document.querySelectorAll('.arow-nav-inner');
    let temp = 0; // bien cua slider bottom
    let positionX = 0; 
    let index = 0;
    let settimeslide = 0;
    let indextime = 0;
    let width_wrap = getoffsetwidthwrap();
    let width = getoffsetwidth();
    let widthparallaxs = getoffsetwidthWparallaxs();
    let widthwrappara =  getoffsetwidthparallaxs();
    let minlengpara = Math.round(widthparallaxs/widthwrappara);




Listsubnavinner.forEach(function(list,index){
    list.onclick = function(e){
        Itemsubnavinner[index].classList.toggle('open')
        arowinner[index].classList.toggle('rota')
    }
})
  //Dong mo header 
  navOpen.addEventListener('click',function(event){
        navList.classList.toggle('open');
  })

  //Dong mo nav 
  ListItems.forEach(function(item,index){
        item.onclick = function(e){ 
            if(e.target == e.currentTarget ||e.target == this){
                Itemsubnav[index].classList.toggle('open');
                arow[index].classList.toggle('rota');
            }
        };
  });

  function handleOpenNav(index){
    
  }
 // START   
    function start(){
       showSlides();
       setInterval(showSlides, 5000); 
       setInterval(function(){
           handleChangslide(1);
       }, 5000); 
       handleSlidedot();
       setInterval(function(){
        if(settimeslide >= (parallaxs_leng / minlengpara)){
            settimeslide = 0;
        }
        handleSlidedots(settimeslide)
        settimeslide++;
        
    }, 5000); 

       setInterval(function(){
         if(indextime >= 3){
            indextime = 0;
        }
            document.querySelector('.dot2.active').classList.remove('active')
            dotList[indextime].classList.add('active');
            indextime++;
            
    }, 5000); 
    }

    // Lấy width của slide 
    function getoffsetwidth(){
        let width = package_item[0].offsetWidth;
        return width;
    }
    function getoffsetwidthwrap(){
        let width_wrap = package_items.offsetWidth;
        return width_wrap;
    }

    //Lấy width của parallaxs 
    function getoffsetwidthparallaxs(){
        let width = parallaxs[0].offsetWidth;
        return width;
    }
    function getoffsetwidthWparallaxs(){
        let width = parallaxswrap.offsetWidth;
        return width;
    }
    window.addEventListener('resize', function(event) {
        setTimeout(() => {
            width_wrap = getoffsetwidthwrap();
            width = getoffsetwidth();
            handleChangslide(-1);
             widthparallaxs = getoffsetwidthWparallaxs();
             widthwrappara =  getoffsetwidthparallaxs();
             minlengpara = Math.round(widthparallaxs/widthwrappara);
            handleSlidedots(0)
        }, 200)
     }, true);  
    

    if(btnNext){
        btnNext.onclick = function(){
            setTimeout(showSlides, 100);
        };
    }

    // function dot 
     function handleSlidedot(){
    dotList.forEach((dot,index)=>{
        dot.onclick = function(e){
            document.querySelector('.dot2.active').classList.remove('active');
            dot.classList.add('active');
            handleSlidedots(index);
        }
    })
    }

    function handleSlidedots(direction){
        let transform;
        if(direction == 0){
            transform = 0;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
        if(direction == 1){
            transform = 0 - widthparallaxs;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
        if(direction == 2){
            transform =  0 - widthparallaxs*2;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
        if(direction == 3){
            transform = 0 - widthparallaxs*3;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
        if(direction == 4){
            transform = 0 - widthparallaxs*4;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
        if(direction == 5){
            transform = 0 - widthparallaxs*5;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
        if(direction == 6){
            transform = 0 - widthparallaxs*6;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
        if(direction == 7){
            transform = 0 - widthparallaxs*7;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
        if(direction == 8){
            transform = 0 - widthparallaxs*8;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
        if(direction == 8){
            transform = 0 - widthparallaxs*8;
            parallaxswrap.style.transform = `translateX(${transform}px)`;
        }
    }
// PREV
    if(btnPre){
        btnPre.onclick = function(){
            setTimeout(showSlides, 100);
        };
    }
    dot1next.onclick = ()=>{
        handleChangslide(1)
        active(1)
    }

    dot1prev.onclick = ()=>{
        handleChangslide(-1)
        active(-1)
    }
    function active(direction){
         if(direction == 1){
             index++;
             if(index > 2){
                 index = 2;
                 return
             }else{
                dot1next.classList.add('active');
                dot1prev.classList.remove('active');
             }
             
         }
         if(direction == -1){
             index--;
            if(index <= 1){
                index = 1;
                dot1next.classList.remove("active");
                dot1prev.classList.add("active");
                return ;
            }
        }
    }
    function handleChangslide(direction){

        if(direction == 1){
            positionX = positionX - (width);
            temp ++;  // 1 
            const leng_width = Math.round(width_wrap/width);
            if(temp > package_length - leng_width){
                temp = 0;
                positionX = 0;
                package_items.style.transform = `translateX(${positionX}px)`;
                active(-1)
            }else{
                package_items.style.transform = `translateX(${positionX}px)`;
                active(1);
            }
            
        }
        else if(direction == -1){
            positionX = positionX + (width);
            temp --;
            if(temp <= 0){
                positionX = 0;
                package_items.style.transform = `translateX(${positionX}px)`;
                temp =0 ;
                return ;
            }else{
                package_items.style.transform = `translateX(${positionX}px)`;
            }
            
        }
    }
                           
    //HAM XU LY SLIDER header
    let slideIndex = 0;
    function showSlides(){
        for(let i = 0 ;i<slides.length;i++){
            slides[i].style.display = "none";
        }
        slideIndex ++;
        if(slideIndex > slides.length){
            slideIndex = 1;
        }
        slides[slideIndex-1].style.display = "block";
    }
    //Ham xu ly slider 
    start();
});