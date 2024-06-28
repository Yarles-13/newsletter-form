const form = document.querySelector("form");
const card1 = document.querySelector(".card");
const card2 = document.querySelector(".submit-card");
const confirmationPTag = document.getElementById('confirmation-message')
const emailInput = document.getElementById("email");
const submitButton = document.querySelector(".submit-button");
const dismissbutton = document.getElementById('dismiss-button');


function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let email = emailInput.value;
  let invalidPTag = document.querySelector('.invalid-message');

  if (validateEmail(email)){
    card1.classList.add("hide");
    card2.classList.remove("hide");
    confirmationPTag.textContent = `A confirmation email has been sent to ur ${email}. Please open it and click the button to confirm your subscription `;
  } else {
    emailInput.classList.add('.email-alert');
    invalidPTag.classList.remove('hide')
  }
});
emailInput.addEventListener('input', (e) => {
  emailInput.classList.remove('email-alert');
  invalidPTag.classList.add('hide')
})

dismissbutton.addEventListener('click', (e) => {
  e.preventDefault()
  card2.classList.add("hide");
  card1.classList.remove("hide");
  emailInput.value = '';
  invalidPTag.classList.add("hide");
})