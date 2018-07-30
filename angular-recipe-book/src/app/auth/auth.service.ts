import * as firebase from 'firebase/app';
import 'firebase/auth';

export class AuthService {
  token: string;
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
      firebase.auth().currentUser.getIdToken()
        .then( token => this.token = token);
    })
    .catch(
      error => console.log(error)
    );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
        .then( token => this.token = token);
        return this.token;
  }
}
