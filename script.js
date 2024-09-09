var tl1 = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"80% 50%",
    scrub:true,
    markers:true
}})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"40% 50%",
    scrub:true,
    markers:true
}})


tl1.to("#fanta",{
    top:"120%",
    left:"0%"
},'fan-nta')

tl1.to("#lemon2",{
    top:"165%",
    left:"23%"
},'fan-nta')
tl1.to("#orange",{
    top:"160%",
    left:"80%"
},'fan-nta')
tl1.to("#leaf",{
    top:"100%",
    left:"80%",
    rotate:"360deg"
},'fan-nta')



tl2.to("#fanta",{
    top:"215%",
    left:"34%",
    height:"55%"
},"thr-ee")

tl2.to("#lemon2",{
    top:"200%",
    left:"43%",
    zIndex:"1"
    // height:"55%"
},"thr-ee")

tl2.from("#torange1",{
    left:"50%",
    opacity:0,
    top:"90%"
},"thr-ee")

tl2.from("#torange3",{
    left:"-50%",
    opacity:0,
    top:"90%"
},"thr-ee")

tl2.from("#cocacola",{
    top:"90%",
    opacity:0,
},"thr-ee")
tl2.from("#Pepsi",{
    top:"90%",
    opacity:0,
},"thr-ee")
