import {
  auth
} from "./fbConfig";
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { createCookie } from './helpers'

const loginBtn = document.getElementById('js-login-btn');
const emailElt = document.getElementById('js-email')
const passwordElt = document.getElementById('js-password')
const errorMessageElt = document.querySelector('.danger.error-message');


loginBtn.addEventListener('click', evt => {

  evt.preventDefault()
  signInWithEmailAndPassword(auth, emailElt.value, passwordElt.value)
    .then(userCredential => {
      createCookie('user', JSON.stringify(userCredential.user), 30)
      window.location.replace('/')
    })
    .catch(error => {
      console.log(error);
      errorMessageElt.innerHTML = 'Verify your informations'
    })
})