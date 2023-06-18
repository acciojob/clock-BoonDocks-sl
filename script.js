//your JS code here. If required.

 function updateTimer() {
      var timerElement = document.getElementById("timer");
      var currentTime = new Date();

      var date = currentTime.toLocaleDateString();
      var time = currentTime.toLocaleTimeString();

      timerElement.textContent = date + ", " + time;
    }

    setInterval(updateTimer, 1000);