  (function () {
            const track = document.getElementById('carouselTrack1');
            document.getElementById('leftBtn1').onclick = () => {
                track.scrollBy({ left: -250, behavior: 'smooth' });
            };
            document.getElementById('rightBtn1').onclick = () => {
                track.scrollBy({ left: 250, behavior: 'smooth' });
            };
        })();

          const menuIcon = document.querySelector("#menu-burger");
        const nav = document.querySelector("nav");

        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("bx-x");
            nav.classList.toggle("active");
        });