=== File: src/hooks/useCollection.js ===
=== Content ===
// missing orderBy param

import { useState, useEffect, useRef } from 'react';
import { db } from '../firebase/config';

import { collection, onSnapshot, query, order, where } from 'firebase/firestore';

// collection, query, order
export const useCollection = (collectionParam, _query, _order)  => {
  const [documents, setDocuments] = useState(null);

  const queryParam = useRef(_query).current;
  const orderParam = useRef(_order).current;

  useEffect(() => {
    let ref = collection(db, collectionParam);

    if(queryParam) {
      ref = query(ref, where(...queryParam));
    };
    if(orderParam) {
      // order param not set up at the moment
      // dont seem to be using query param at all either
    };

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push({id: doc.id, ...doc.data()});
      });
      setDocuments(results);
    })
    
    return () => unsub();
    
  }, [collectionParam]);

  return { documents }
};




// old v8 query and order functions

//     if (query) {
//       ref = ref.where(...query)
//     }
//     if (orderBy) {
//       ref = ref.orderBy(...orderBy)
//     }

=== End of src/hooks/useCollection.js ===

