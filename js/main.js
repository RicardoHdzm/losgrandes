gsap.registerPlugin('ScrollTrigger');

(() => {
    document.addEventListener('DOMContentLoaded', (e) => {
        gsap.fromTo('.waiting #text-path', {
            attr: {
                startOffset: '-22%'
            },
        }, {
            attr: {
                startOffset: '-2.6%'
            },
            duration: 6,
            ease: 'none',
            repeat: -1,
        });

    });
})();