const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline({scrollTrigger:{trigger:".part-1",
start:"50% 50%",
end:"150% 50%",
scrub:true,
markers:true,
pin:true,
}})