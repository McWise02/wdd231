function saveLoginTime() {
    const now = new Date();
    localStorage.setItem('lastLogin', now.toString());
  }
  



  function displayWelcomeMessage() {
    const lastLogin = localStorage.getItem('lastLogin');
    
    if (!lastLogin) {
      document.getElementById('welcome-message').innerText = 'Welcome! We are glad to have you here!';
      return;
    }
  
    const lastLoginDate = new Date(lastLogin);
    const now = new Date();
    const diffInTime = now - lastLoginDate; 
    const diffInDays = diffInTime / (1000 * 3600 * 24); 
    if (diffInDays <= 7) {
      // Logged in within the last week
      document.getElementById('welcome-message').innerText = 'Welcome back! It\'s great to see you again this week!';
    } else if (diffInDays <= 30) {
      // Logged in within the last month
      document.getElementById('welcome-message').innerText = 'Welcome back! It\'s been a while since your last visit!';
    } else {
      // Logged in more than a month ago
      document.getElementById('welcome-message').innerText = 'Welcome back! We missed you!';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    displayWelcomeMessage()
    saveLoginTime()
  });  