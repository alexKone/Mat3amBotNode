import {
  onAuthStateChanged,
  signInWithCustomToken
} from "firebase/auth";
import { auth } from "./fbConfig";
import {
  eraseCookie,
  getCookie
} from "./helpers";


// console.log(getCookie('mat_user_id'))
// console.log(getCookie('mat_user_token'))

onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log(user)
    localStorage.setItem('user', JSON.stringify({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid
    }))
  } else {
    if (getCookie('mat_user_token')) {
      const userData = await signInWithCustomToken(auth, getCookie('mat_user_token'))
    } else {
      window.location.replace('/login')
    }
    window.location.replace('/login')
  }
})


document.getElementById('logout_btn').addEventListener('click', evt => {
  evt.preventDefault();
  auth.signOut()
    .then(r => window.location.replace('/login'))
});
