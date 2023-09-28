function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
function videoContainerAnimation() {
    const videoContainer = document.querySelector(".video-container");


    const videoCursor = document.querySelector('.video-cursor');

    // videoContainer.addEventListener("mouseenter", function (e) {
    //     gsap.to(videoCursor, {
    //         display: 'block',
    //         scale: 1,
    //     })
    // })

    // videoContainer.addEventListener("mouseleave", function (e) {
    //     gsap.to(videoCursor, {
    //         display: 'block',
    //         scale: 0,
    //     })
    // })
    videoContainer.addEventListener("mousemove", function (e) {

        gsap.to(videoCursor, {
            left: e.x - 70,
            top: e.y - 70,
        })
    })
}
function page1Animation() {
    const bounding = document.querySelectorAll("#boundingElem")
    gsap.to(bounding, {
        y: 0,
        ease: Expo.easeIn,
        stagger: .2,
        // scrub:2,
    })
}
function cursorAnimation() {
    const cursor = document.querySelector("#cursor")
    const child3 = document.querySelector("#child3")
    const child4 = document.querySelector("#child4")
    const child5 = document.querySelector("#child5")
    const child6 = document.querySelector("#child6")
    window.addEventListener("mousemove", function (e) {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
        })
    })

    child3.addEventListener("mouseenter", function (e) {
        gsap.to(cursor, {
            transform: `translate(-50%, -50%) scale(1.4)`,
            backgroundColor: "lightgrey"
        })
    })
    child3.addEventListener("mouseleave", function (e) {
        gsap.to(cursor, {
            // transform: `translate(-50%, -50%) scale(0)`,
            scale: 0,
        })
    })
    child4.addEventListener("mouseenter", function (e) {
        gsap.to(cursor, {
            transform: `translate(-50%, -50%) scale(1.4)`,
            backgroundColor: "skyblue"
        })
    })
    child4.addEventListener("mouseleave", function (e) {
        gsap.to(cursor, {
            // transform: `translate(-50%, -50%) scale(0)`,
            scale: 0,

        })
    })
    child5.addEventListener("mouseenter", function (e) {
        gsap.to(cursor, {
            transform: `translate(-50%, -50%) scale(1.4)`,
            backgroundColor: "grey"
        })
    })
    child5.addEventListener("mouseleave", function (e) {
        gsap.to(cursor, {
            // transform: `translate(-50%, -50%) scale(0)`,
            scale: 0,

        })
    })
    child6.addEventListener("mouseenter", function (e) {
        gsap.to(cursor, {
            transform: `translate(-50%, -50%) scale(1.4)`,
            backgroundColor: "lightgreen"
        })
    })
    child6.addEventListener("mouseleave", function (e) {
        gsap.to(cursor, {
            // transform: `translate(-50%, -50%) scale(0)`,
            scale: 0,

        })
    })
}

function navbarAnimation() {
    gsap.to(".logo-container img", {
        transform: "translateY(-100%)",
        duration: .5,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "main",
            start: "top 0",
            end: "top -5%",
            scrub: true,
        },
    });
    gsap.to(".nav-right .links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "main",
            start: "top 0",
            end: "top -5%",
            scrub: true,
        },
    });
}


function overallAnimation() {
    gsap.from(".video-container video , .video-cursor",{
        y:90,
        opacity: 0,
        duration:2,
        stagger:.1,
        scrollTrigger:{
          trigger:"#page1",
          scroller:'main',
          // markers:true,
          start:"top 0%",
          end:"top -5%",
          scrub:2,
        }
      })
      gsap.from("#page2 .elem , .dets",{
        scale:0.8,
        opacity: 0,
        duration:1,
        stagger:.5,
        delay:0.5,
        scrollTrigger:{
          trigger:"#page2",
          scroller:'main',
          // markers:true,
          start:"top 60%",
          end:"top 50%",
          scrub:2,
        }
      })
      gsap.from(".child-container ",{
        scale:0.8,
        opacity: 0,
        duration:.4,
        stagger:1,
        ease:Expo.easInOUt,
        scrollTrigger:{
          trigger:"#page3",
          scroller:'main',
          start:"top 80%",
          end:"50%",
          scrub:3,
        }
      })
      gsap.from("#page4 .p4-container",{
        scale:0.8,
        opacity: 0,
        duration:1,
        stagger:.5,
        delay:0.5,
        scrollTrigger:{
          trigger:"#page4",
          scroller:'main',
          // markers:true,
          start:"top 60%",
          end:"top 50%",
          scrub:2,
        }
      })
      var enter = gsap.timeline()
      enter.from("#page5 .p5-top",{
        scale:0.8,
        opacity: 0,
        x:-1000,
        duration:1,
        stagger:.5,
        delay:0.5,
        scrollTrigger:{
          trigger:"#page5",
          scroller:'main',
          // markers:true,
          start:"top 60%",
          end:"top 50%",
          scrub:2,
        }
      })
      enter.from("#anime-enter",{
        opacity: 0,
        duration:1,
        scale:.2,
        stagger:.5,
        delay:1,
        scrollTrigger:{
          trigger:"#page5",
          scroller:'main',
          // markers:true,
          start:"top 20%",
          end:"top 50%",
          scrub:2,
        }
      })
    
}

locomotiveAnimation();
// videoContainerAnimation()
page1Animation()
cursorAnimation()
navbarAnimation()
overallAnimation()