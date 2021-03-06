// Slider
new Swiper(".reviews-slider", {
  direction: "vertical",
  loop: true,
});

// Timer
(function (time) {
  let display = time.querySelector("#countdown .display");
  let timeLeft = parseInt(display.innerHTML);

  let timer = setInterval(function () {
    if (--timeLeft >= 0) {
      // если таймер всё еще больше нуля
      display.innerHTML = timeLeft; // обновляем цифру
    } else {
      time.querySelector("#countdown h1").style.display = "none";
      time.querySelector("#countdown h2").style.display = "block";
      clearInterval(timer);
    }
  }, 60000); // таймер срабатывает каждые 60000 msec (1 min)
})(document);

// Scroll
let hiddenElement = document.getElementById("form");
let btn = document.querySelectorAll(".btn");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn.forEach(function (button) {
  button.addEventListener("click", handleButtonClick);
});
