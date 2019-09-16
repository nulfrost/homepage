const date = document.getElementById('date');
const time = document.getElementById('time');
const message = document.getElementById('day-message');

date.innerHTML = new Date().toLocaleDateString('en-US', {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
});

setInterval(() => {
  time.innerHTML = new Date().toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  });
}, 1000);

const hour = new Date().getHours();

setInterval(() => {
  if (hour >= 12 && hour <= 17) {
    message.innerHTML = 'Good afternoon.';
  } else if (hour >= 18 && hour <= 23) {
    message.innerHTML = 'Good night.';
  } else {
    message.innerHTML = 'Good morning.';
  }
}, 60 * 60 * 1000);
