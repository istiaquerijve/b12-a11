import React from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ( {children} ) => {

    const registerUsr = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        registerUsr,
        singInUser
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