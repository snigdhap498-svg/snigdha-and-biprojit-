const startDate = new Date("2024-11-01T00:00:00");

function updateCounter() {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += previousMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const diff = now - startDate;
  const hours = Math.floor(diff / 36e5) % 24;
  const minutes = Math.floor(diff / 6e4) % 60;

  document.getElementById("counter").innerHTML = `
    <div class="time-box"><strong>${years}</strong><span>Years</span></div>
    <div class="time-box"><strong>${months}</strong><span>Months</span></div>
    <div class="time-box"><strong>${days}</strong><span>Days</span></div>
    <div class="time-box"><strong>${hours}</strong><span>Hours</span></div>
  `;
}

updateCounter();
setInterval(updateCounter, 60000);
