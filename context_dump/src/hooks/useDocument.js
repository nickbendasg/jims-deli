=== File: src/hooks/useDocument.js ===
=== Content ===
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";
import { doc, onSnapshot } from 'firebase/firestore';

export const useDocument = (collectionParam, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = doc(db, collectionParam, id);

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if(snapshot.data()) {
        setDocument({ ...snapshot.data(), id: snapshot.id });
        setError(null);
      } else {
        setError('no such document exists');
      };
    }, (err) => {
      console.log(err.message);
      setError('failed to get document');
    });

    return () => {
      unsubscribe();
    };
    
  }, [collectionParam, id]);

  return { document, error };
};
=== End of src/hooks/useDocument.js ===

