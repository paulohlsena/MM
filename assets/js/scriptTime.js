var timeDisplay = document.getElementById("time");

function refreshTime() {
  var daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  
  var now = new Date();
  var brazilTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}));

  var dayOfWeek = daysOfWeek[brazilTime.getDay()];
  var day = brazilTime.getDate().toString().padStart(2, '0');
  var month = (brazilTime.getMonth() + 1).toString().padStart(2, '0');
  var year = brazilTime.getFullYear();
  var hours = brazilTime.getHours().toString().padStart(2, '0');
  var minutes = brazilTime.getMinutes().toString().padStart(2, '0');
  var seconds = brazilTime.getSeconds().toString().padStart(2, '0');

  var formattedString = dayOfWeek + ", " + day + "/" + month + "/" + year + " - " + hours + ":" + minutes + ":" + seconds;
  
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);