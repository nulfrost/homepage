const myTime = document.getElementById("time");
setInterval(() => {
  myTime.innerHTML = new Date();
}, 1000);
