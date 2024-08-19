gsap.from("#navbar", {
    y: -50,
    opacity: -3,
    duration: 1,
    stagger: true
})
// let slides=document.querySelectorAll(".slides");


// let slidecount=1;
// document.querySelector(".left").addEventListener("click",()=>{
//     if(slidecount<slides.length){document.querySelector(".slider").style.transform = `translateX(-${slidecount*60})vh`;
//     slidecount=slidecount+1;}

// })


let slides = document.querySelectorAll(".slides");
let slidecount = 1; // Start with 0 to include the first slide
const slideWidth = 65; // Use 100vw for full viewport width
let autoSlide;
function autoSlidefunc() {
    autoSlide = setInterval(() => {
        if (slidecount < slides.length) { // Ensure slidecount doesn't exceed number of slides
            let num = slidecount * slideWidth;
            document.querySelector(".slider").style.transform = `translateX(-${num}vh)`;
            slidecount++;
        } else {
            document.querySelector(".slider").style.transform = `translateX(0vh)`;
            slidecount = 1;
        }

    }, 2000)
}
autoSlidefunc();

document.querySelector(".slider").addEventListener("mouseover", () => {
    clearInterval(autoSlide);
})

document.querySelector(".slider").addEventListener("mouseleave", () => {
    autoSlidefunc();
})
document.querySelector(".right").addEventListener("mouseover", () => {
    clearInterval(autoSlide);
})
document.querySelector(".right").addEventListener("mouseleave", () => {
    autoSlidefunc();
})
document.querySelector(".left").addEventListener("mouseleave", () => {
    autoSlidefunc();
})

document.querySelector(".right").addEventListener("click", () => {

    if (slidecount < slides.length) { // Ensure slidecount doesn't exceed number of slides
        let num = slidecount * slideWidth;
        document.querySelector(".slider").style.transform = `translateX(-${num}vh)`;
        slidecount++;
    } else {
        document.querySelector(".slider").style.transform = `translateX(0vh)`;
        slidecount = 1;
    }
});
document.querySelector(".left").addEventListener("click", () => {
    if (slidecount > 1) {
        let num = (slidecount - 2) * slideWidth;
        document.querySelector(".slider").style.transform = `translateX(-${num}vh)`;
        slidecount--;
    } else {
        document.querySelector(".slider").style.transform = `translateX(-${(slides.length - 1) * 65}vh)`;
        slidecount = slides.length;
    }
})


//second exciting goodies slide

//This is for next slide but I am declaring these varibales here
let dots = document.querySelectorAll(".dot");
let left2 = document.querySelector("#left2");
let right2 = document.querySelector("#right2");
let cloths = document.querySelectorAll(".cloth");
let towhomTransform = document.querySelector("#intershipslider");
let clothcount = 1;
let slideWidth2 = 100;
let autoSlide2;
function autoSlidefunc2() {
    autoSlide2 = setInterval(() => {
        if (clothcount < cloths.length) { // Ensure slidecount doesn't exceed number of slides
            let num = clothcount * slideWidth2;
            if (num == 0) {
                dots[0].style.fill = 'green';
                for (let i = 1; i < 4; i++) {
                    dots[i].style.fill = 'black';
                }
            } else if (num == 100) {
                dots[1].style.fill = 'green';
                dots[0].style.fill = 'black'
                for (let i = 2; i < 4; i++) {
                    dots[i].style.fill = 'black';
                }
            }
            else if (num == 200) {
                dots[2].style.fill = 'green';
                for (let i = 0; i < 2; i++) {
                    dots[i].style.fill = 'black';
                }
                dots[3].style.fill = 'black';

            }
            else if (num == 300) {
                dots[3].style.fill = 'green';
                for (let i = 0; i < 3; i++) {
                    dots[i].style.fill = 'black';
                }
            }
            towhomTransform.style.transform = `translateX(-${num}vw)`;
            clothcount++;
        } else {
            towhomTransform.style.transform = `translateX(0vw)`;
            dots[0].style.fill = 'green';
            dots[3].style.fill = 'black';
            clothcount = 1;
        }
    }, 2000)
}
autoSlidefunc2();
left2.addEventListener("click", () => {
    clearInterval(autoSlide2);
    if (clothcount > 1) {
        let num = (clothcount - 2) * slideWidth2;
        towhomTransform.style.transform = `translateX(-${num}vw)`;
        clothcount--;
    } else {
        towhomTransform.style.transform = `translateX(-${(cloths.length - 1) * slideWidth2}vw)`;
        clothcount = cloths.length;
    }
})

right2.addEventListener("click", () => {
    clearInterval(autoSlide2);
    if (clothcount < cloths.length) { // Ensure slidecount doesn't exceed number of slides
        let num = clothcount * slideWidth2;
        console.log(num)
        towhomTransform.style.transform = `translateX(-${num}vw)`;
        clothcount++;
    } else {
        towhomTransform.style.transform = `translateX(0vw)`;
        clothcount = 1;
    }
})
towhomTransform.addEventListener("mouseover", () => {
    clearInterval(autoSlide2);
})
towhomTransform.addEventListener("mouseleave", () => {
    autoSlidefunc2();
})

right2.addEventListener("mouseover", () => {
    clearInterval(autoSlide2)
})
left2.addEventListener("mouseover", () => {
    clearInterval(autoSlide2)
})
right2.addEventListener("mouseleave", () => {
    autoSlidefunc2()
})
left2.addEventListener("mouseleave", () => {
    autoSlidefunc2()
})

//applying js to dots here

Array.from(dots).forEach((el) => {
    el.addEventListener("mouseover", () => {
        clearInterval(autoSlide2);
    })
    el.addEventListener("mousleave", () => {
        autoSlidefunc2();
    })

})
dots[0].addEventListener("click", () => {
    Array.from(dots).forEach((el) => {
        el.style.fill = 'black';
    })
    dots[0].style.fill = 'green';
    towhomTransform.style.transform = `translateX(-${0}vw)`;
})
dots[1].addEventListener("click", () => {
    Array.from(dots).forEach((el) => {
        el.style.fill = 'black';
    })
    dots[1].style.fill = 'green';
    towhomTransform.style.transform = `translateX(-${100}vw)`;
})
dots[2].addEventListener("click", () => {
    Array.from(dots).forEach((el) => {
        el.style.fill = 'black';
    })
    dots[2].style.fill = 'green';
    towhomTransform.style.transform = `translateX(-${200}vw)`;
})
dots[3].addEventListener("click", () => {
    Array.from(dots).forEach((el) => {
        el.style.fill = 'black';
    })
    dots[3].style.fill = 'green';
    towhomTransform.style.transform = `translateX(-${300}vw)`;
})

//WHO WE ARE sliding
let leftinfobtn = document.querySelector("#leftinfobtn");
let rightinfobtn = document.querySelector("#rigthinfobtn");
let aboutusSlides = document.querySelectorAll(".aboutus");
let aboutwhoweare = document.querySelector("#aboutwhoweare");
let whoweare=document.querySelector("#whoweare");

let transformwidth = 90;
let viewportwidth=window.innerWidth;

let aboutusCount = 1;
rightinfobtn.addEventListener("click", () => {
    if (aboutusCount < aboutusSlides.length) {
        aboutwhoweare.style.transform = `translateX(-${aboutusCount * transformwidth}vh)`;
        aboutusCount++;
    } else {
        aboutwhoweare.style.transform = `translateX(0vh)`;
        aboutusCount = 1;
    }
})
// FOR RESPONSIVENESS
if(whoweare.offsetWidth==360){
    leftinfobtn.style.display="none";
    rightinfobtn.style.display="none";
    aboutwhoweare.style.gap="10vh"
    let aboutus=document.querySelectorAll(".aboutus");
    aboutus[1].innerHTML="But that’s not all. We’re also investing in the future of the industry through our internship program. We know that practical knowledge is the key to success in tech. That’s why we offer hands-on learning experiences, real-world projects, and guidance from industry experts."
 Array.from(aboutus).forEach((el)=>{
   el.style.fontSize="13px"
 })
let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#aboutwhoweare",
        scroller:"body",
        markers:true
    }
});
    tl2.to("#aboutwhoweare section:nth-child(1)",{
       x:"-0.5%",
       y:"-15%",
     duration:0.5
    })

    tl2.to("#aboutwhoweare section:nth-child(2)",{
        x:"-0.5%",
        y:"10%",
       
       
     })

     tl2.to("#aboutwhoweare section:nth-child(3)",{
        x:"-0.5%",
        y:"25%",
       
         marginTop:"10%"
      
     })
     tl2.to("#aboutwhoweare section:nth-child(4)",{
        x:"-0.5%",
        y:"60%",
        
        
     })
     tl2.to("#aboutwhoweare section:nth-child(5)",{
        x:"-0.5%",
        y:"80%",
         
        
     })
}


leftinfobtn.addEventListener("click", () => {
    if (aboutusCount > 1) {
        aboutwhoweare.style.transform = `translateX(-${(aboutusCount-1) * transformwidth}vh)`;
        aboutusCount--;
    } else {
        aboutwhoweare.style.transform = `translateX(-0vh)`;
        aboutusCount = aboutusSlides.length;
    }
})

gsap.from("#thiswasneeded",{
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:"#thiswasneeded",
        scroller:"body",
        scrub:true,
        // markers:true,
        start:"top 50%",
        end:"top 40%"
    }
})
let tl=gsap.timeline({scrollTrigger:{
    trigger:"#insidefirstsec",
    scroller:"body",
    // markers:true,
    start:"top 100%",
   }})
tl.from("#insidefirstsec",{
    scale:0,
    duration:0.9,
   opacity:0,
   filter:"blur(8)",
})
tl.from("#insidefirstsec p span",{
    Y:-100,
    duration:0.5,
   opacity:0,
   scale:0
})

tl.from("#insidesecondsec",{
    scale:0,
    duration:0.9,
   opacity:0,
   filter:"blur(8)",
})
tl.from("#insidesecondsec p span",{
    Y:-100,
    duration:0.5,
   opacity:0,
   scale:0
})

gsap.from("#aboutus",{
      scale:0,
    duration:1
})
gsap.from("#frame",{
   
    scale:0,
    duration:1,
    
})
gsap.from("footer", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "footer",
        // Optional: shows start and end markers for debugging
    }
});
gsap.from("form", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "form",
       // Optional: shows start and end markers for debugging
    }
});
gsap.from("#internshipsection section",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "form",
      // Optional: shows start and end markers for debugging
    }

})
 console.log(document.querySelector("#insidefirstsec").offsetWidth)
 console.log(document.querySelector("#insidesecondsec").offsetWidth)
 if(document.querySelector("#insidesecondsec").offsetWidth==290){
    document.querySelector("#insidesecondsec").innerHTML=`
     <h3>Empowering Businesses with Cutting-Edge Websites and Web Applications</h3>
        <p>
            <span>In today’s dynamic marketplace, a robust e-commerce platform is essential for businesses of all sizes to thrive.

            </span><span>At <b>InternCode</b>, we boast a team of seasoned web developers with a wealth of experience in crafting bespoke e-commerce solutions tailored to your unique needs.

            </span>
             </p>
        <button>Contact Us</button>
    `

    document.querySelector("#insidefirstsec").innerHTML=`
     <h3>Empowering Businesses with Cutting-Edge Websites and Web Applications</h3>
        <p>
            <span>In today’s dynamic marketplace, a robust e-commerce platform is essential for businesses of all sizes to thrive.

            </span><span>At <b>InternCode</b>, we boast a team of seasoned web developers with a wealth of experience in crafting bespoke e-commerce solutions tailored to your unique needs.

            </span>
              </p>
        <button>Contact Us</button>
    `

     //ABOUT US SECTION SETTING

 Array.from(document.querySelectorAll('.aboutus')).forEach((el)=>{
    el.addEventListener("mouseover",()=>{
        el.style.scale="1.2"
    })
    el.addEventListener("mouseleave",()=>{
        el.style.scale="1"
    })
     })
 }


 //now adding contact section through hambergur

 document.querySelector('.hamburger').addEventListener('click',()=>{
    if(document.querySelector('#contactinfobar').style.transform=="translateX(-4vw)"){
        document.querySelector('.hamburger').src='./images/close.png'
 document.querySelector('#contactinfobar').style.transform="translateX(60vw)"
 document.querySelector('.hamburger').src='./images/hamburger.png'
    }else{
 document.querySelector('#contactinfobar').style.transform="translateX(-4vw)"
 document.querySelector('.hamburger').src='./images/close.png'
    }
   
 })
