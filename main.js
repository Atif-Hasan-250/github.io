
let itemTl = gsap.timeline({ defaults: { duration: .7, ease: 'sine.out' } });

itemTl.from("#item-1", { y: 10, duration: 2, repeat: -1, yoyo: true })
    .from('#item-2', { delay: .5, y: 10, duration: 2, repeat: -1, yoyo: true })
    .from('#item-3', { delay: .5, y: 10, duration: 2, repeat: -1, yoyo: true })
    .from('#item-3 .item-bar', { ease: 'bounce.out', opacity: 0, delay: -1.5, duration: 2, repeat: -1, yoyo: true, stagger: .6, repeatDelay: 3 }, "-=2.5")
    .from('#item-2 .item-bar', { delay: .8, scaleX: 0, duration: 2, repeat: -1, yoyo: true, stagger: .6, repeatDelay: 3 }, "-=3.5")

let item1Tl = gsap.timeline({ defaults: { repeat: -1, repeatDelay: 2 } });

item1Tl
    .from('#item-1 .item-sq', 3, { scale: 0, opacity: 0, duration: 2, yoyo: true, repeat: -1 })
    .from('#item-1 .item-bar', { delay: 1, scaleX: 0, opacity: 0, duration: 2, yoyo: true, stagger: .6, repeat: -1 });

let heroTl = gsap.timeline();

heroTl
    .from('.anim-1', { delay: .2, opacity: 0, y: 30, stagger: .2, duration: 1 });


// timeline for service section
let serviceTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#services',
        start: 'top 80%'
    }
});
serviceTl
    .from('#services .heading-2', { delay: .2, opacity: 0, y: 30, duration: 1 })
    .from('#services .service-item', { delay: .3, opacity: 0, y: 30, stagger: .2, duration: 1 }, '-=1');


// timeline for Projects section
let projectsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%'
    }
});
projectsTl
    .from('#projects .heading-2', { delay: .2, opacity: 0, y: 30, duration: 1 })
    .from('#projects .project-item', { delay: .3, opacity: 0, y: 30, stagger: .2, duration: 1 }, '-=1');

// timeline for testimonial section
let testimonialTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 80%'
    }
});
testimonialTl
    .from('#testimonials .heading-2', { delay: .2, opacity: 0, y: 10, duration: 1 })
    .from('#testimonials .right img', { delay: .2, opacity: 0, y: 20, duration: 1 }, '-=1')
    .from('#testimonials .testimonial-item', { delay: .3, opacity: 0, y: 50, stagger: .2, duration: 1 }, '-=1.5');


// needWebsite Timeline
let needWebsiteTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#need-website',
        start: 'top 80%'
    },
    defaults: {
        duration: 1
    }
});

needWebsiteTl
    .from('#need-website .container', { opacity: 0 })
    .from('#need-website .heading-3', { delay: .5, opacity: 0, y: 20, duration: 1.5 }, '-=1')
    .from('#need-website p', { opacity: 0, y: 20, duration: 1.5 }, '-=1.2')
    .from('#need-website a', { opacity: 0, y: 20, duration: 1.5 }, '-=1.2');

// Contact Timeline

let contactTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%'
    }
});

contactTl
    .from('#contact', { opacity: 0, duration: 2 });


// Custom Cursor Element
const cursorEl = document.querySelector('#cursorEl');
window.addEventListener('mousemove', (e) => {
    if (cursorEl.classList.contains('out')) {
        cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorEl.classList.remove('out');
    }
    if (cursorEl.classList.contains('active')) return;
    // console.log(document.body.offsetHeight);
    if (e.pageX >= (document.body.offsetWidth - 20) ||
        e.pageX <= (10) || e.pageY <= 10
    ) {
        cursorEl.style.transform = 'scale(0)';
        cursorEl.classList.add('out');
    }
    setTimeout(() => {
        cursorEl.style.left = e.pageX + 'px';
        cursorEl.style.top = e.pageY + 'px';
    }, 1000 / 20)

    cursorEl.setAttribute("data-fromTop", cursorEl.offsetTop - scrollY);
});

window.addEventListener("scroll", () => {
    const fromTop = cursorEl.getAttribute("data-fromTop");
    cursorEl.style.top = scrollY + parseInt(fromTop) + "px";
});

function showBland(e) {
    if (e.type === 'mouseleave') {
        cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorEl.classList.remove('showBland');
        return
    }
    cursorEl.classList.add('showBland');
    cursorEl.style.transform = 'translate(-50%, -50%) scale(8)';
}
const blandEls = document.querySelectorAll('.show-bland');
blandEls.forEach(el => {
    el.addEventListener('mousemove', showBland);
    el.addEventListener('mouseleave', showBland);
})

const cursorTextEl = document.querySelectorAll('[data-cursor]');
cursorTextEl.forEach(el => {
    el.addEventListener('mousemove', showCursorText);
    el.addEventListener('mouseleave', showCursorText);
});

function showCursorText(e) {
    if (e.type === 'mouseleave') {
        cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorEl.innerText = '';
        return;
    }
    const data = e.target.getAttribute('data-cursor');
    cursorEl.innerText = data;
    cursorEl.style.transform = 'translate(-50%, -50%) scale(8)';
}


/*---------------------------------------*/

    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "<br>" + "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "<br>" + "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

/*  --  //favicon --   */

function change_favicon(img) {
  var favicon = document.querySelector('link[rel="shortcut icon"]');

  if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'shortcut icon');
      var head = document.querySelector('head');
      head.appendChild(favicon);
  }


  favicon.setAttribute('type', 'image/png');
  favicon.setAttribute('href', img);
}

change_favicon('./images/favicon.png');