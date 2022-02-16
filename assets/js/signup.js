import {
  auth
} from "./fbConfig";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";

const signupBtn = document.getElementById('js-signup-btn');
const emailElt = document.getElementById('js-email')
const phoneNumberElt = document.getElementById('js-phoneNumber')
const passwordElt = document.getElementById('js-password')
const errorMessageElt = document.querySelector('.danger.error-message');


signupBtn.addEventListener('click', evt => {
  evt.preventDefault()
  createUserWithEmailAndPassword(auth, emailElt.value, passwordElt.value)
    .then((userCredential) => {
      createCookie('user', userCredential.user, 30)
      window.location.replace('/')
    })
    .catch((error) => {
      errorMessageElt.innerHTML = error.message
    });
})