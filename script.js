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
end:"250% 50%",
scrub:true,
markers:true,
pin:true,
}})

tl.to(".rotate-div",{
    rotate: -15,
    scale:0.8,
},'a')
tl.to("#row-div-2",{
    marginTop:"5%"
},'a')
tl.to("#row-div-3",{
    marginTop:"-2%"
},'a')
tl.to("#row-div-4",{
    marginTop:"-8%"
},'a')
tl.to("#row-div-5",{
    marginTop:"-10%"
},'a')

tl.to(".overlay-div h1",{
    opacity:"1",
    delay:0.2,
},'a')

tl.to(".overlay-div ",{
    backgroundColor:"#00000081",
},'a')