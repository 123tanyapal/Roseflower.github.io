document.querySelector(".move:nth-child(2)").addEventListener("click",function(){
    document.querySelector(".move:nth-child(2)").style.width="100%";
})
document.querySelector(".move:nth-child(3)").addEventListener("click",function(){
    document.querySelector(".move:nth-child(3)").style.width="100%";
})
document.querySelector(".move:nth-child(4)").addEventListener("click",function(){
    document.querySelector(".move:nth-child(4)").style.width="100%";
})

document.querySelectorAll(".fourth h1").forEach(function(h1){
    var clutter=""
    // console.log(h1);
    h1.textContent.split("").forEach(function(charc){
        clutter+=`<span>${charc}</span>`;
    })
    h1.innerHTML=clutter;
    
})

var tm=gsap.timeline()

tm
.from(".txt3>h1 span",{
    opacity:0,
    y:70,
    duration:0.5,
    stagger:0.1
})
.from(".txt3 .image2",{
    opacity:0,
    right:0,
    duration:1,
},"a")
.from(".image3",{
    opacity:0,
    right:0,
    duration:1,
},"a")
.from(".image5",{
    opacity:0,
    bottom:"-70%",
    duration:1,
},"a")
.from(".image4",{
    opacity:0,
    // right:0,
    duration:3,
},"a")

function fnc(){
    document.querySelectorAll(".txt h1").forEach(function(h1){
        var clutter=""
        // console.log(h1);
        h1.textContent.split("").forEach(function(charc){
            clutter+=`<span>${charc}</span>`;
        })
        h1.innerHTML=clutter;
        
    })
}
fnc();

var m=gsap.timeline()
m
.from(".abc h2",{
    stagger:0.2,
    y:20,
    duration:2
 },"b")
 .from(".abc h1",{
    stagger:0.2,
    y:20,
    duration:2
 },"b")
.from(".txt h1 span",{
    opacity:0,
    color:"red",
    scale:1.4,
    y:20,
    duration:2,
    stagger:0.3,
    filter:"blur(2px)",
    ease:Expo
},"a")
.from(".dotcircle",{
    scale:2,
    duration:2,
    opacity:0,
},"a")

.from(".abc .section",{
    stagger:0.2,
    y:20,
    duration:2
 },"a")
 .from(".viewcircle",{
    rotate:"270deg",
    // y:20,
    duration:2
 },"b")


