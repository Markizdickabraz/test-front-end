document.addEventListener('DOMContentLoaded', function() {
  var cookiePopup = document.getElementById('cookiePopup');
  var acceptButton = document.getElementById('acceptButton');

  // Перевірка, чи користувач вже прийняв умови
  if (!getCookie('cookieAccepted')) {
    cookiePopup.style.display = 'block';
  }

  // Обробник натискання кнопки "Згоден"
  acceptButton.addEventListener('click', function() {
    setCookie('cookieAccepted', 'true', 365); // Встановити куку на 365 днів
    cookiePopup.style.display = 'none';
  });

  // Функція для отримання значення куки за ім'ям
  function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  // Функція для встановлення куки
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
});
