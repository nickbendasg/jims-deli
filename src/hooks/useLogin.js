import { useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db } from "../firebase/config";
import { doc, updateDoc } from 'firebase/firestore';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
  
    try {
      // login
      const res = await signInWithEmailAndPassword(auth, email, password);

      const { uid } = res.user;
      const docGrab = doc(db, 'users', uid);
      await updateDoc(docGrab, { online: true });
      
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      };
    } catch(err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      };
    };
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error };
};