$(document).ready(() => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let event = "Feb 19, 2021 12:00:00";
  let countDown = new Date(event).getTime();
  let x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDown - now;

      $("#days").html(Math.floor(distance / day).toLocaleString("fa"));
      $("#hours").html(Math.floor((distance % day) / hour).toLocaleString("fa"));
      $("#minutes").html(Math.floor((distance % hour) / minute).toLocaleString("fa"));
      $("#seconds").html(Math.floor((distance % minute) / second).toLocaleString("fa"));

      if (distance < 0) {
        $("#countdown").css("display","none");
        $("#content").css("display","block");

        clearInterval(x);

        $(".cd-container h4").css("visibility","hidden");
      }
    }, 1000);
});