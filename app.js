$(document).ready(function () {
    $(".image-slider").slick({
      slidesToShow: 1.66,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: true ,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
  $(document).ready(function () {
    $(".video-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: true ,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
     
    });
  });
  $(document).ready(function () {
    $(".slideDanhGia").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      draggable: true ,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
      autoplay: true,
      autoplaySpeed: 5000,
    });
  });

  function popupclose() {
    let modalCamOn = document.querySelector(".popupThuCamOn");
    modalCamOn.style.display = "none";
  }
  
  function onBlurPopup(){
    let modalCamOn = document.querySelector(".popupThuCamOn");
    modalCamOn.style.display = "none"
  }



    
  function popupCamOn() {
    let modal = document.querySelector(".popup");
    let modalCamOn = document.querySelector(".popupThuCamOn");
    
    let closeBtn1 = document.querySelector(".close-btn1");
    modalCamOn.style.display = "block";
    modalCamOn.style.transition="2s";

    modal.style.display = "none"
    closeBtn1.onclick = function () {
      modalCamOn.style.display = "none";
      
     }
  }
  
  function popupDangNhap() {
    let modal = document.querySelector(".popup");
    let modalCamOn = document.querySelector(".popupThuCamOn");
    let closeBtn = document.querySelector(".close-btn");
    let closeBtn1 = document.querySelector(".close-btn1");
    nodeluupass = document.getElementById("checkbox");
 if (nodeluupass.checked == true) {

    modal.style.display = "block";
    closeBtn.onclick = function () {
      modal.style.display = "none"
     }
 }
 else{
  modalCamOn.style.display = "block";
     closeBtn1.onclick = function () {
      modalCamOn.style.display = "none"
     }
 }
    
  }