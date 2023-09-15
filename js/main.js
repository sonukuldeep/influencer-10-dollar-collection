gsap.registerPlugin(ScrollTrigger)

gsap.to('.ease-in', {
    duration: 1,
    opacity: 1,
    scale: 1
})

// gsap.to('.animation-on-enter', {
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.animation-on-enter',
//         start: 'top 90%',
//         end: 'top 40%',
//         markers: true,
//         toggleClass: 'activate',
//     }
// })


/**
 * Description:- Pass class name to this function to animate it when it enters viewport
 * @param {string} className 
 * @returns {void}
 */
function scrollTrigger(className, end = "bottom 70%") {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: className,
            markers: true,
            start: "top 70%",
            end,
            scrub: 1,

        },
        defaults: {
            stagger: 1,
        }
    })

    tl.to(className, {
        width: '100%', scale: 1, opacity: 1,
    })
}

/**
 * Description:- Pass class name to this function to animate it when it enters viewport
 * @param {string} className 
 * @returns {void}
 */
function opacity(className) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: className,
            start: "top 70%",
            end: "top 70%",
            scrub: 1,
        },
    })

    tl.to(className, {
        opacity: 1,
    })
}


scrollTrigger(".scroll-trigger")
scrollTrigger(".scroll-trigger-2")
scrollTrigger(".scroll-trigger-3")
scrollTrigger(".scroll-trigger-4", "500% 70%")
scrollTrigger(".scroll-trigger-5")
opacity(".enable1")
opacity(".enable2")
opacity(".enable3")


ScrollTrigger.observe({
    target: window,
    type: "pointer",
    onMove: ({ deltaX, deltaY }) => {
        gsap.to('.pointer-animation', { x: deltaX * 0.4, y: deltaY * 0.4, })
        gsap.to('.pointer-animation-1', { y: deltaX * 0.4, x: deltaY * 0.4, })
    }
})