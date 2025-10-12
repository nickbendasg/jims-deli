import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { db } from "../firebase/config";
import { doc, updateDoc } from 'firebase/firestore';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch, user } = useAuthContext()
  
  const logout = async () => {

    console.log('logout');
    
    setError(null);
    setIsPending(true);

    try {
      
      const { uid } = user;

      const docGrab = doc(db, 'users', uid);
      await updateDoc(docGrab, { online: false });
      
      // sign the user out

      console.log('singout', signOut);
      await signOut(auth);
      
      // dispatch logout action
      dispatch({ type: 'LOGOUT' });

      // update state
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
    return () => setIsCancelled(true)
  }, []);

  return { logout, error, isPending };
}