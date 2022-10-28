import React from 'react'

const Banner = () => {
    let bannerPosition = 1;
    let bannerTimer = 6000;

    window.onload = function() {
        bannerCarousel();
    }

    
    
    
    
    const bannerCarousel = () =>{
        if(bannerPosition === 1){
            document.getElementById('img-banner-2').style.opacity = '0';
            
            setTimeout(function () {
                document.getElementById(`img-banner-1`).style.right = "0px";
                document.getElementById(`img-banner-1`).style.zIndex = "100";
                document.getElementById(`img-banner-2`).style.right = "-2000px";
                document.getElementById(`img-banner-2`).style.zIndex = "1000";
                document.getElementById(`img-banner-3`).style.right = "2000px";
                document.getElementById(`img-banner-3`).style.zIndex = "10";
            }, 500);
            
            setTimeout(function() {
                document.getElementById('img-banner-2').style.opacity = '1';
            }, 1000)
            bannerPosition = 2;
        }
        else if(bannerPosition === 2){
            document.getElementById('img-banner-3').style.opacity = '0';
            
            setTimeout(function () {
                document.getElementById(`img-banner-2`).style.right = "0px";
                document.getElementById(`img-banner-2`).style.zIndex = "100";
                document.getElementById(`img-banner-3`).style.right = "-2000px";
                document.getElementById(`img-banner-3`).style.zIndex = "1000";
                document.getElementById(`img-banner-1`).style.right = "2000px";
                document.getElementById(`img-banner-1`).style.zIndex = "10";
            }, 500);
            
            setTimeout(function() {
                document.getElementById('img-banner-3').style.opacity = '1';
            }, 1000)
            bannerPosition = 3;
        }
        else if(bannerPosition === 3){
            document.getElementById('img-banner-1').style.opacity = '0';
            
            setTimeout(function () {
                document.getElementById(`img-banner-3`).style.right = "0px";
                document.getElementById(`img-banner-3`).style.zIndex = "100";
                document.getElementById(`img-banner-1`).style.right = "-2000px";
                document.getElementById(`img-banner-1`).style.zIndex = "1000";
                document.getElementById(`img-banner-2`).style.right = "2000px";
                document.getElementById(`img-banner-2`).style.zIndex = "10";
            }, 500);
            
            setTimeout(function() {
                document.getElementById('img-banner-1').style.opacity = '1';
            }, 1000)
            bannerPosition = 1;
        }
    }
    
    const startCarouselLoop = setInterval(function(){
        bannerCarousel();
    }, bannerTimer)
    
    return (
    <div id="banner-container">
        <div className='img-banner' id='img-banner-3'></div>
        <div className='img-banner' id='img-banner-2'></div>
        <div className='img-banner' id='img-banner-1'></div>
    </div>
  )
}

export default Banner
