const date = document.getElementById('date');
const time = document.getElementById('time');

date.innerHTML = new Date().toLocaleDateString('en-US', {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
});

setInterval(
  () =>
    (time.innerHTML = new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    }))
);
