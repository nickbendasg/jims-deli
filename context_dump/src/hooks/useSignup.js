=== File: src/hooks/useSignup.js ===
=== Content ===
import { useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db, storage } from "../firebase/config";
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);
  
    try {
      // signup

      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error('Could not complete signup');
      };

      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const tempRef = ref(storage, uploadPath);

      // maybe do not need to declare constant?
      const img = await uploadBytes(tempRef, thumbnail);

      const imgUrl = await getDownloadURL(tempRef);

      // add display name to user
      await updateProfile(auth.currentUser, { 
        displayName, 
        photoURL: imgUrl 
      });

      console.log(res);
      console.log(res.user);
      console.log('res.user.id', res.user.id)
      
      await setDoc(doc(db, 'users', res.user.uid), {
        online: true,
        displayName,
        photoURL: imgUrl,
      });

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      };
    } catch(err) {
      if (!isCancelled) {
        console.log('catch error');
        console.log(err);
        setError(err.message);
        setIsPending(false);
      };
    };
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
=== End of src/hooks/useSignup.js ===

