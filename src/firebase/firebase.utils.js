import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAFfKH1VP9LvPg11hXIEVZT9xnE3Hrj05c',
  authDomain: 'e-commerce-full-stack-app.firebaseapp.com',
  databaseURL: 'https://e-commerce-full-stack-app.firebaseio.com',
  projectId: 'e-commerce-full-stack-app',
  storageBucket: 'e-commerce-full-stack-app.appspot.com',
  messagingSenderId: '648130104254',
  appId: '1:648130104254:web:e1119ee1a88d1e60d307ef'
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
