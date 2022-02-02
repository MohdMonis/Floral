gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// code for svg animation.
var distancePerPoint = 1;
var drawFPS = 60;

var orig = document.querySelector('path'),
    length, timer;

function startDrawingPath() {
    length = 0;
    orig.style.stroke = '#fff';
    timer = setInterval(increaseLength, 600 / drawFPS);
}

function increaseLength() {
    var pathLength = orig.getTotalLength();
    length += distancePerPoint;
    orig.style.strokeDasharray = [length, pathLength].join(' ');
    if (length >= pathLength) clearInterval(timer);
}

function stopDrawingPath() {
    clearInterval(timer);
    orig.style.stroke = '';
    orig.style.strokeDasharray = '';
}

// end of svg 

gsap.set("#txltgsp", { opacity: 0 })
gsap.set("#txtp1", { opacity: 0 })
gsap.set("#txtp2", { opacity: 0 })
gsap.set("path", { opacity: 0 })
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#txlt",
        start: "top 70%",
        scroller: "#main",
        // markers: true,
    }
})

tl.to("#txltgsp", {
    opacity: 1,
    duration: 2,
    onstart: function() {
        jQuery(function($) {
            $('#txltgsp').textillate({ in: {
                    effect: 'fadeInUp',
                },
                out: {
                    effect: "fadeOutDown"
                }
            });
        });
    },
})

.to("#txtp1", {
    opacity: 1,
    duration: 2,
    onstart: function() {
        jQuery(function($) {
            $('#txtp1').textillate({ in: {
                    effect: 'fadeInUp',
                },
                out: {
                    effect: "fadeOutDown"
                }
            });
        });
    },
})

.to("path", {
    opacity: 1,
    duration: 1,
    onstart: function() {
        startDrawingPath()
    }
}, "-=2")

.to("#txtp2", {
    opacity: 1,
    duration: 2,
    onstart: function() {
        jQuery(function($) {
            $('#txtp2').textillate({ in: {
                    effect: 'fadeInUp',
                },
                out: {
                    effect: "fadeOutDown"
                }
            });
        });
    },
}, "-=.1")


// 
// footre animation
gsap.set(".anmftr", { opacity: 0 })
var pone = gsap.timeline({
    scrollTrigger: {
        trigger: "#p1",
        start: "top 80%",
        scroller: "#main",
        // markers: true,
    }
})

pone.fromTo(".anmftr", {
    opacity: 0,
    y: 20,
    duration: 1.4,

}, {
    opacity: 1,
    y: 0,
    stagger: .4,
    duration: 1.4,
})