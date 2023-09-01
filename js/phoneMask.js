document.addEventListener('DOMContentLoaded', function() {
  var phoneMask = IMask(
    document.getElementById('phone-mask'),
    {
      mask: '+380-00-000-00-00'
    }
  );
});

function validateForm() {
  var nameInput = document.getElementById('name');
  var phoneInput = document.getElementById('phone-mask');
  var phoneNumber = phoneInput.value.replace(/\D/g, '');

  if (nameInput.value.trim() === '') {
    alert('Будь ласка, введіть ваше імʼя.');
  } else if (phoneNumber.length !== 12) {
    alert('Номер телефону неповний.');
  } else {
    alert('Форма валідна. Дякуємо!');
    document.getElementById('myForm').submit(); // Відправка форми
  }
}
