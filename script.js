// scroll sections active link
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
  const scrollY = window.pageYOffset;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*=' + sectionId + '] span').classList.add('active-link');
    }
    else{
      document.querySelector('.nav_menu a[href*=' + sectionId + '] span').classList.remove('active-link');
    }
  })
}
window.addEventListener('scroll', scrollActive);


// hamburger menu function
const  body = document.querySelector("body");
const  nav = document.querySelector(".nav");
const  menu = document.querySelector(".nav_menu");
const  menuBtn = document.querySelector(".menu_bar");
const  cancelBtn = document.querySelector(".cancel_bar");

         menuBtn.onclick = () =>{
             menu.classList.add("active");
             menuBtn.classList.add("hide");
             body.classList.add("disabledScroll");
         }
         cancelBtn.onclick = () =>{
            menu.classList.remove("active");
            menuBtn.classList.remove("hide");
            body.classList.remove("disabledScroll");
        }


// hide menu onclick
        const navLink = document.querySelectorAll('.nav__link');
        navLink.forEach(n => n.addEventListener('click', () =>{
              const  menu = document.querySelector(".nav_menu");
              const  menuBtn = document.querySelector(".menu_bar");
              const  body = document.querySelector("body");

              menu.classList.remove("active");
            menuBtn.classList.remove("hide");
            body.classList.remove("disabledScroll");
        }));


//  stikcy navbar
        window.onscroll = () =>{
           if ( this.scrollY > 100) {
                nav.classList.add("sticky");
        }
        else{
            nav.classList.remove("sticky");
        }
        }


// typed span
        var typed = new Typed(".typing", {
        strings: ["Programmer", "Developer", "Blogger", "Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
     var typed = new Typed(".typing2", {
        strings: ["Programmer", "Developer", "Blogger", "Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
// filtrable image gallery
    const filterItem = document.querySelector(".items");
    const filterImg = document.querySelectorAll(".image");
    window.onload = () =>{
        filterItem.onclick = (selectedItem)=>{
            if(selectedItem.target.classList.contains("item")){
                filterItem.querySelector(".active").classList.remove("active");
                selectedItem.target.classList.add("active");
                let filterName = selectedItem.target.getAttribute("data-name");
                filterImg.forEach((image) =>{
                    let filterImages = image.getAttribute("data-name");
                    if((filterImages == filterName) || filterName == "all"){
                        image.classList.remove("hide");
                        image.classList.add("show");
                    }
                    else{
                        image.classList.add("hide");
                        image.classList.remove("show");
                    }
                })
            }
        }
    }


// playing videos
    const videoPlayer = document.getElementById("videoPlayer");
    const myVideo = document.getElementById("myVideo");
    function stopVideo(){
        videoPlayer.style.display = "none";
        myVideo.muted = true;
    }
    function playVideo(file){
                myVideo.src= file;
                myVideo.muted = false;
                videoPlayer.style.display = "block";
    }


// Contact form Code
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function validate(){
  const   name = document.getElementById("name");
  const   mail = document.getElementById("email");
  const   sub = document.getElementById("subject");
  const   msg =  document.getElementById("message");
  const submit = document.querySelector(".btn");

  submit.addEventListener("click", (e)=>{
    e.preventDefault();
    if(name.value == "" || mail.value == "" || sub.value == "" || msg.value == ""){
      inputEmpty();
    }
    else {
      sendMail(name.value, mail.value, sub.value, msg.value);
      console.log("succes");
      success();
      document.getElementById("myForm").reset();
    }
  })
}
validate();


function sendMail(name, mail, sub, msg){
  emailjs.send("service_yptdlh8","template_arlr23k",{
    from_name: name,
    email:mail,
    subject: sub,
    message: msg,
    });
}
function success(){
  swal({
    title: "Good job!",
    text: "Successfully sent message!",
    icon: "success",
    button: "ok!",
  });
}
function error(){
  swal({
    title: "Oops...!",
    text: "Something went wrong, message could not be sent!",
    icon: "error",
    button: "ok!",
  });
}
function inputEmpty(){
  swal({
    title: "Oops...!",
    text: "Inputs fields  are required!",
    icon: "error",
    button: "ok!",
  });
}


// load page
window.addEventListener("load", () => {
    document.querySelector(".page_load").classList.add("fade_out");
    myVideo.muted = true;
    setTimeout(() =>{
        document.querySelector(".page_load").style.display="none";
    }, 1500);
});


// Scroll top when reloading website
history.scrollRestoration = "manual";
$(window).on('beforeunload', () =>{
  $(window).scrollTop(0);
});


// scroll button to top
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) {
      scrollUp.classList.add('show-scroll')
    }
    else{
      scrollUp.classList.remove('show-scroll')
    }
};
window.addEventListener('scroll', scrollUp);


// GSAP ANIMATION
gsap.from('.home_content', {opacity: 0, duration: 2, delay: 1.5, y:25})
gsap.from('.text-1, .text-2, .text-3, .hire_button', {opacity: 0, duration: 2, delay: 1.7, y:25, ease: 'expo.out', stagger: .2})

gsap.from('.logo, .menu_bar', {opacity: 0, duration: 2, delay: 1.7, y:25, ease: 'expo.out', stagger: .2})
gsap.from('.nav__link', {opacity: 0, duration: 2, delay: 1.5, y:25, ease: 'expo.out', stagger: .2})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
})


sr.reveal(`.title-text`,{
  origin: 'top',
  interval: 100,
})
sr.reveal(`.about__button,
              .text,
              .about__p,
              .card,
              .items,
              .image`,{
  origin: 'top',
  interval: 100,
})

sr.reveal(`.left,
                 .contact-info`,{
  origin: 'left',
})

sr.reveal(`.right,
                .contact-form`,{
  origin: 'right',
  interval: 100,
})