=== File: src/hooks/useFirestore.js ===
=== Content ===
import { useReducer, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, doc, deleteDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null };
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null };
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: null, success: true, error: null };
    case 'UPDATED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null };
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload };
    default:
      return state;
  };
};

export const useFirestore = (collectionParam) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  let ref = collection(db, collectionParam);

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    };
  };

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const createdAt = serverTimestamp();
      const addedDocument = await addDoc(ref, { 
        ...doc, 
        createdAt 
      });

      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    };
  };

  // delete a document
  const deleteDocument = async (id) => {
    // debugger;
    dispatch({ type: 'IS_PENDING' });

    try {
      const newRef = doc(db, collectionParam, id);
      await deleteDoc(newRef);
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' });
    };
  };

  const updateDocument = async (id, updates) => {
    dispatch({ type: 'IS_PENDING' })
    try {
      const newRef = doc(db, collectionParam, id);

      const updatedDocument = await updateDoc(newRef, updates);
      dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: updatedDocument });
      return updatedDocument;
      
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not update' });
      return null;
    };
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, updateDocument, response };

};

=== End of src/hooks/useFirestore.js ===

