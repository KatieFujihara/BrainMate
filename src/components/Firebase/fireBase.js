import app from 'firebase/app'
import 'firebase/auth';


  // TODO: environment variables not loading correctly
  const config = {

  };

  class Firebase {
      constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
      }

       // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }

  export default Firebase;

