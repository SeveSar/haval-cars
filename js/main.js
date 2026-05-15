Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
const burger = document.querySelector(".js-burger");
const menu = document.querySelector(".js-menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});
(function () {

    const sliders = document.querySelectorAll(".card-slider");


    sliders.forEach((slider) => {
        const swiperEl = slider.querySelector(".swiper");
        const swiper = new Swiper(swiperEl, {
            spaceBetween: 16,
            slidesPerView: 1,
            pagination: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            init: false,
        });

        const slides = slider.querySelectorAll(".swiper-slide");
        const pagination = slider.querySelector(".swiper-pagination");
        function buildPagination(slides, paginationEl, swiper) {
            slides.forEach((slide, index) => {
                const img = slide.querySelector("img");
                const src = img.getAttribute("src");

                const match = src.match(/-([0-9A-Fa-f]{6})/);
                const color = match ? `#${match[1]}` : "#000";

                const bullet = document.createElement("div");
                bullet.className = "custom-bullet";
                bullet.style.backgroundColor = color;

                bullet.addEventListener("click", () => {
                    swiper.slideTo(index);
                });

                paginationEl.appendChild(bullet);
            });
        }

        function setActive(paginationEl, index) {
            const bullets = paginationEl.querySelectorAll(".custom-bullet");

            bullets.forEach((b, i) => {
                b.classList.toggle("active", i === index);
            });
        }

        swiper.on("init", function () {
            buildPagination(slides, pagination, swiper);
            setActive(pagination, swiper.activeIndex || 0);
        });

        swiper.on("slideChange", function () {
            setActive(pagination, swiper.activeIndex);
        });

        swiper.init();
    })

})();
//# sourceMappingURL=main.js.map
