import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

  const config = {
    apiKey: "AIzaSyBVxDqSkYDsFv0pyk4kJ7YMIgeQYPuz82E",
    authDomain: "brainmate-7a79b.firebaseapp.com",
    databaseURL: "https://brainmate-7a79b.firebaseio.com",
    projectId: "brainmate-7a79b",
    storageBucket: "brainmate-7a79b.appspot.com",
    messagingSenderId: "118920061242"
  };


  class Firebase {
      constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.firestore = app.firestore();
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
      
      // *** User Data API *** 

    getUserData = () => this.firestore.collection('users').get()
    

    doAssignUserPreferencesWithUserId = (userId) => {
      this.firestore.collection('users').doc(userId).set({
        testinfo: "TEST"
      })}
  }


  export default Firebase;

