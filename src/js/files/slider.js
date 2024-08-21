import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

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
}
