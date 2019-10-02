import React from 'react';
import Swiper from 'react-id-swiper';
import  './Carousel.css'


  const Autoplay = () => {
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
 return (
      <div className="container_Carousel">
   <Swiper {...params}>
        <div><img src="https://www.thelead.io/wp-content/uploads/2019/06/javascript-illustration.png" /></div>
        <div><img  src="https://cdn.softwaretestinghelp.com/wp-content/qa/uploads/2018/11/Angular-JS-edited.png" /></div>
        <div><img  src="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png" /></div>
        <div><img src="https://zdnet4.cbsistatic.com/hub/i/2019/04/21/9d791bf2-9b20-476a-bba6-201e622d2a1f/e842eb3c351d9c4cf358e7088923da14/jquery-logo-blue.png "/></div>
        <div><img src="https://miro.medium.com/max/1050/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg" /></div>
       
      </Swiper>
     
      </div>
     
    )  
  };
  export default Autoplay;


