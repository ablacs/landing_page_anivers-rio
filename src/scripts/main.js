AOS.init();
function formatCountdown(distance) {
  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const dataViagem = new Date("apr 07, 2025 16:00:00").getTime();
const dataAviao = new Date("apr 05, 2025 17:00:00").getTime();
const dataCheckIn = new Date("mar 17, 2025 16:00:00").getTime();

const x = setInterval(() => {
  const now = Date.now();
  
  const countdownViagem = formatCountdown(dataViagem - now);
  const countdownAviao = formatCountdown(dataAviao - now);
  const countdownCheckIn = formatCountdown(dataCheckIn - now);
  
  document.getElementById('contagemViagem').innerHTML = countdownViagem;
  document.getElementById('contagemAviao').innerHTML = countdownAviao;
  document.getElementById('contagemCheckIn').innerHTML = countdownCheckIn;
  
  if (dataViagem - now < 0) {
    clearInterval(x);
    document.getElementById("contagemViagem").innerHTML = "Chegou a hora!";
  }
  if (dataAviao - now < 0) {
  document.getElementById("contagemAviao").innerHTML = "Chegou a hora!";
}

if (dataCheckIn - now < 0) {
  document.getElementById("contagemCheckIn").innerHTML = "Chegou a hora!";
}
}, 1000);
