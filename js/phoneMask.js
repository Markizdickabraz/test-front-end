document.addEventListener('DOMContentLoaded', function() {
  var phoneInput = document.getElementById('phone-mask');
  var nameInput = document.getElementById('name');

  var phoneMask = IMask(
    phoneInput,
    {
      mask: '+380-00-000-00-00'
    }
  );

  // При введенні тексту, скидайте червоний колір і жовтий бордер.
  nameInput.addEventListener('input', function() {
    nameInput.classList.remove('invalid');
    nameInput.style.border = '1px solid #ccc';
  });

  phoneInput.addEventListener('input', function() {
    phoneInput.classList.remove('invalid');
    phoneInput.style.border = '1px solid #ccc';
  });
});

function renderStartPage() {
  const markup = `
   <button type="button" class="modal__button-close" data-modal-close>
                <img src="./img/formClose.svg" alt="form close button">
            </button>
  <form class="form" id="myForm">
                <strong class="form__title">Залишайте заявку</strong>
                <p class="form__text">Ми звʼяжемося з вами найближчим часом</p>
                <ul class="form__list list">
                    <li>
                        <label for="name" class="form__label">
                            <input type="text" class="form__input" id="name" placeholder="Ваше імʼя*">
                        </label>
                    </li>
                    <li>
                        <label for="tel" class="form__label">
                            <input type="text" class="form__input" id="phone-mask" placeholder="+380-00-000-00-00*">
                            <img class="form__icon" src="./img/form-icon.svg" alt="icon form">
                        </label>
                    </li>
                </ul>
                <button type="button" class="form__btn" onclick="validateForm()">Відправить</button>
                <p class="form__consent">Натискаючи кнопку "Надіслати", ви погоджуєтесь з
                    <a class="form__link" href="#">Правилами обробки персональних даних.</a>
                </p>
            </form>`;
  const modalContent = document.querySelector('.modal')
  modalContent.innerHTML = markup;
}

function validateForm() {

  var nameInput = document.getElementById('name');
  var phoneInput = document.getElementById('phone-mask');
  var phoneNumber = phoneInput.value.replace(/\D/g, '');

  if (nameInput.value.trim() === '') {
    nameInput.classList.add('invalid');
    nameInput.style.border = '1px solid #ff0000';
    return; 
  } 

  if (phoneNumber.length !== 12) {
    phoneInput.classList.add('invalid');
    phoneInput.style.border = '1px solid #ff0000';
    return; 
  }

  var modalContent = document.querySelector('.modal');
  // document.getElementById('myForm').submit();

  modalContent.innerHTML = `<div class="submit__container">
  <img class="submit__img" src="../img/quality.svg" alt="success icon">
  <h2 class='submit__title'> Дякуємо за заявку!</h2 >
  <p class="submit__text">Ваші дані успішно надіслані!</p></div>`;
  setTimeout(function () { 
    const backdrop = document.querySelector('.backdrop');
    backdrop.classList.add('is-hidden');
    renderStartPage()
  }, 2000);
}
