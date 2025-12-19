const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower(xScale, yScale) {
  window.addEventListener("mousemove", function (dels) {
    //console.log(dels.clientX,dels.clientY);
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dels.clientX}px, ${dels.clientY}px) scale(${xScale}, ${yScale})`;
  });
}

function firstPageAnim() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: 0.2,
      delay: -1,
    })
    .from("#herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
    });
}

var timeOut;
function circleSqueeze() {
  // default scale value
  var xScale = 1;
  var yScale = 1;
  var xPrev = 0;
  var yPrev = 0;
  window.addEventListener("mousemove", function (dels) {
    clearTimeout(timeOut);
    var xDiff = dels.clientX - xPrev;
    var yDiff = dels.clientY - yPrev;
    xScale = gsap.utils.clamp(0.8, 1.2, xDiff);
    yScale = gsap.utils.clamp(0.8, 1.2, yDiff);

    xPrev = dels.clientX;
    yPrev = dels.clientY;

    circleMouseFollower(xScale, yScale);
    timeOut = this.setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dels.clientX}px, ${dels.clientY}px) scale(1,1)`;
    }, 100);
  });
}

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${formattedMinutes} ${ampm}`;
  clockElement.textContent = timeString;
}

// Update the clock immediately and then every minute
updateClock();
setInterval(updateClock, 60000);

circleMouseFollower();
firstPageAnim();
circleSqueeze();
