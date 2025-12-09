import React from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ( {children} ) => {

    const googleProvidre = new GoogleAuthProvider()

    const registerUsr = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvidre)
    }

    const authInfo = {
        registerUsr,
        singInUser,
        signInGoogle
    }

    return (
        <div className="">
            <AuthContext value = {authInfo}>
            {children}
        </AuthContext>
        </div>
        
    );
};

export default AuthProvider;