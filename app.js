
function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()


function CursorEffect(){
    var page1Content=document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")
page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
    // cursor.style.left=dets.x+"px"
    // cursor.style.top=dets.y+"px"
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
CursorEffect()

function page2Animation(){
    // GSAP animation for p
gsap.from(".elem p", {
    y: 120,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 40%",
        end: "top 37%",
        scrub: 2,
    },
});
gsap.from(".elem hr", {
    y: 120,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 47%",
        end: "top 46%",
        scrub: 2,
    },
});


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Select all spans inside the h1
const h1Lines = document.querySelectorAll(".elem h1 span");

// GSAP timeline for staggered animation
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2", // Element triggering the animation
        scroller: "#main", // Scrolling container
        start: "top 47%", // Start when top of #page2 hits 47% of viewport
        end: "top 46%", // End when top of #page2 hits 46% of viewport
        scrub: 2, // Smooth scroll syncing
        toggleActions: "play reset play reset", // Replays animation every time you scroll
    },
});

// Animate each line
tl.from(h1Lines, {
    y: 100, // Start 100px below
    opacity: 0, // Start invisible
    stagger: 0.3, // Stagger each line by 0.3s
    duration: 1, // Each animation lasts 1s
    ease: "ease-out", // Smooth easing
});

}
page2Animation()


document.addEventListener("DOMContentLoaded", () => {
    const spans = document.querySelectorAll(".elemm h1 span");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.8 } // Trigger animation when 80% of the element is visible
    );
  
    spans.forEach((span) => observer.observe(span));
  });

  var swiper = new Swiper(".mySwiper", {
    //slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:{
        delay:2500,
        disableOneInteraction:true,
    },
  });

var tl = gsap.timeline()
tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1,
})
tl.from("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1,
})
tl.to("#loader",{
    opacity:0
})
tl.to("#loader",{
    display:"none",
})
tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration:0.5
})
  
  