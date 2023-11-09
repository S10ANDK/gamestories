const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const submitButton = document.querySelector("#contact-submit_button");
const contactUsSuccess = document.querySelector(".contact-success-container");
const contactInfo = document.querySelector(".contact-info");
const contactImage = document.querySelector(".contact-image-container");
const horizontalLine = document.querySelector(".horizontal-line-container");

function validateContactForm() {
  event.preventDefault();

  if (checkCharacterLength(fullName.value, 5) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkCharacterLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkCharacterLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

form.addEventListener("submit", validateContactForm);

function checkCharacterLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatchingEmail = regEx.test(email);
  return patternMatchingEmail;
}

submitButton.onclick = function () {
  if (
    checkCharacterLength(fullName.value, 5) &&
    validateEmail(email.value) === true &&
    checkCharacterLength(subject.value, 15) === true &&
    checkCharacterLength(message.value, 25) === true
  ) {
    contactInfo.style.display = "none";
    contactImage.style.display = "none";
    horizontalLine.style.display = "none";
    contactUsSuccess.style.display = "block";
    form.style.display = "none";
    scrollToStart();
  }
};

function scrollToStart() {
  window.scroll({ left: 0, top: 0 });
}