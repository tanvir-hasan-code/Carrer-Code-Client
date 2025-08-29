import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Auth/firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	}
	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const logOut = () => {
		setLoading(true)
		return signOut(auth)
	}


	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			setLoading(false)
			setUser(user)

			if (user?.email) {
				axios.post('http://localhost:5000/jwt', { email: user.email }, {
					withCredentials: true
				}
				)
					.then(res => res.data)
				.catch(error =>console.log(error))
			}
		})
			return ()=> {
				unSubscribe()
			}
	},[])


	const info = {
		user,
		createUser,
		signInUser,
		logOut,
		googleSignIn,
		loading, 
	}

	


	return (
		<AuthContext value={info}>
			{children}
		</AuthContext>
	);
};

export default AuthProvider;