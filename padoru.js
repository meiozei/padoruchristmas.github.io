// var today = new Date();

// var BigDay = new Date("December 25, 2024 00:00:00:00").getTime;
// var msPerDay = 24 * 60 * 60 * 1000;
// var timeLeft = (BigDay.getTime() - today.getTime());
// var e_daysLeft = timeLeft / msPerDay;
// var daysLeft = Math.floor(e_daysLeft);
// var yearsLeft = 0;
// if (daysLeft > 365) {
//   yearsLeft = Math.floor(daysLeft / 365);
//   daysLeft = daysLeft % 365;
// }
// var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
// var hrsLeft = Math.floor(e_hrsLeft);
// var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
// document.write(yearsLeft + " years " + daysLeft + " days " + hrsLeft + " hours " + minsLeft + " minutes");

//now updates every year without me touching it ever

function getExpirationDate() {
  const currentYear = new Date().getFullYear();
  let expirationDate = new Date(`December 25, ${currentYear} 00:00:00`);
  
  // If the current date is past the expiration date, set it to the next year
  if (new Date() > expirationDate) {
    expirationDate = new Date(`December 25, ${currentYear + 1} 00:00:00`);
  }
  
  return expirationDate;
}
    let deadlineTime = getExpirationDate();

    deadlineTime.setDate(deadlineTime.getDate());
    let deadline = deadlineTime.getTime();
    
    // Function to update countdown timer
    function updateCountdown() {
      if (countdownInterval !== null) {
        // Getting current time in required format
        let now = new Date().getTime();    
        let timeToLive = deadline - now;
      
        // Getting value of days, hours, minutes, seconds
        let days = Math.floor(timeToLive / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeToLive % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeToLive % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeToLive % (1000 * 60)) / 1000);
      
        let daysElements = document.getElementsByClassName("days");
        let hoursElements = document.getElementsByClassName("hours");
        let minutesElements = document.getElementsByClassName("minutes");
        let secondsElements = document.getElementsByClassName("seconds");
    
        // If you have many countdowns, you could fill all the tags using the classname
        Array.from(daysElements).forEach(el => el.innerHTML = days);
        Array.from(hoursElements).forEach(el => el.innerHTML = hours);
        Array.from(minutesElements).forEach(el => el.innerHTML = minutes);
        Array.from(secondsElements).forEach(el => el.innerHTML = seconds);
      
        // Output for over time
        if (timeToLive < 0) {
          countdownInterval && clearInterval(countdownInterval);
          Array.from(daysElements).forEach(el => el.innerHTML = 0);
        Array.from(hoursElements).forEach(el => el.innerHTML = 0);
        Array.from(minutesElements).forEach(el => el.innerHTML = 0);
        Array.from(secondsElements).forEach(el => el.innerHTML = 0);
        }
      }
    }
    
    // To call defined function every second
    let countdownInterval = null;
    updateCountdown();    
    countdownInterval = setInterval(updateCountdown, 1000);
