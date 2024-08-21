import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";

export default function slider() {
  if (window.matchMedia("(max-width: 479px)").matches) {
    const catalogSliders = document.querySelectorAll(".catalog__slider");
    if (catalogSliders.length) {
      catalogSliders.forEach((slider) => {
        const swiper = new Swiper(slider, {
          speed: 700,
          modules: [Autoplay],
          autoplay: true,
          grabCursor: true,
          slidesPerView: "auto",
          slideToClickedSlide: true,
          spaceBetween: 13,
        });
      });
    }
  }

  const blogSlider = document.querySelector(".blog__slider");
  if (blogSlider) {
    const buttonsPagination = document.querySelectorAll(".blog__slider-pagination-btn");

    const swiper = new Swiper(blogSlider, {
      speed: 700,
      modules: [Autoplay, Pagination],
      autoplay: true,
      grabCursor: true,
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: 15,
      pagination: {
        el: ".blog__slider-pagination",
        clickable: true,
        type: "custom",
        bulletClass: "blog__slider-pagination-btn",
      },
      on: {
        init: () => {
          const firstBtnPagination = document.querySelector(".blog__slider-pagination-btn");
          console.log(firstBtnPagination);
          firstBtnPagination.classList.add("active");
        },
        slideChange: ({ activeIndex }) => {
          buttonsPagination.forEach((btn) => btn.classList.remove("active"));
          buttonsPagination[activeIndex].classList.add("active");
        },
      },
    });
  }

  const tariffGallerySliders = document.querySelectorAll(".tariff__slider-gallery");
  if (tariffGallerySliders.length) {
    tariffGallerySliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 700,
        modules: [Navigation],
        grabCursor: true,
        spaceBetween: 15,
        navigation: {
          prevEl: slider.querySelector(".tariff__slider-btn--prev"),
          nextEl: slider.querySelector(".tariff__slider-btn--next")
        }
      });
    });
  }

  if (window.matchMedia("(max-width: 479px)").matches) {
    const tariffSlider = document.querySelector(".tariff__slider");
    if (tariffSlider) {
      const swiper = new Swiper(tariffSlider, {
        speed: 700,
        modules: [Autoplay],
        autoplay: true,
        grabCursor: true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        spaceBetween: 10,
      });
    }
  }
}
