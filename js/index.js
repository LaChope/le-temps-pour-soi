const pageTransition = () => {
    window.onload = () => {
        const transition_el = document.querySelector('.transition');
        const anchors = document.querySelectorAll('.transition-1');

        setTimeout(() => {
            transition_el.classList.remove('is-active');

        }, 500);

        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];

            anchor.addEventListener('click', e => {
                e.preventDefault();
                let target = e.currentTarget.href;
                transition_el.classList.add('is-active');

                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            }, {passive:true});
        }
    }
}

const stickyNavbar = () => {
    window.addEventListener("scroll", function() {
        const header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
}

const navSlide = () => {
    const faBars = document.querySelector('.fa-bars');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    faBars.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

pageTransition();
stickyNavbar();
navSlide();