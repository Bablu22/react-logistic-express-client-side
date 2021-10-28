import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../FIrebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {

    const [user, setUser] = useState({})
    const auth = getAuth();
    const [isLooding, setIsLooding] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    // Google sign in option
    const googleSignIn = () => {
        setIsLooding(true)
        return signInWithPopup(auth, googleProvider)

    }
    // create user with email and password
    const signupEmailPassword = (email, password) => {
        setIsLooding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in user email and password

    const logInEmilPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLooding(false)
        });
    }, [])

    // Log out option
    const logOut = () => {
        setIsLooding(true)
        signOut(auth)
            .then(() => { })
            .finally(() => {
                setIsLooding(false)
            })
    }


    // password reset option
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {

            });
    }

    return {
        user,
        googleSignIn,
        logOut,
        signupEmailPassword,
        resetPassword,
        logInEmilPassword,
        isLooding
    }
}

export default useFirebase;