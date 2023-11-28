import { doc, setDoc } from "firebase/firestore";

import { db } from "..";

export async function addData(collection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (err) {
    error = err;
  }

  return { result, error };
}
