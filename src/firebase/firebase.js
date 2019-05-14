import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth= app.auth();
    this.db = app.database();
  }

  // Auth API
  signIn = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  signOut = () => {
    return this.auth.signOut()
  }

  resetPassword = email => {
    return this.auth.sendPasswordResetEmail(email)
  }

  updatePassword = password => {
    return this.auth.currentUser.updatePassword(password)
  }

  // Database API
  getUser = uid => {
    return this.db.ref(`/users/${uid}`)
  }
}

export default Firebase;