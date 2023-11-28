"use client";
import React, { useState, useEffect, createContext } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import {
  doc,
  collection,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

import { auth, db } from "@/firebase";
import { addData } from "@/firebase/firestore/addData";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setLoading] = useState();

  // ** Auth functions ** //
  const signup = async (email, password, username) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
        console.log(err)
      );
      await updateProfile(auth.currentUser, { displayName: username }).catch(
        (err) => console.log(err)
      );
      addData("users", username, {
        username: username,
        email: email,
        friends: [],
      });
    } catch (err) {
      error = err;
      console.log(err);
    }
  };

  const login = async (email, password) => {
    let result = null;
    let error = null;

    try {
      result = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      error = err;
    }

    return { result, error };
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const changeEmail = (email) => {
    return updateEmail(currentUser, email);
  };

  const changePassword = (password) => {
    return updatePassword(currentUser, password);
  };

  const like = async (category, data) => {
    const categories = {
      [category]: {
        likes: arrayUnion(data),
      },
    };
    const userRef = doc(db, "users", currentUser.displayName);
    await setDoc(userRef, categories, { merge: true });
  };

  const dislike = async (category, data) => {
    const categories = {
      [category]: {
        dislikes: arrayUnion(data),
      },
    };
    const userRef = doc(db, "users", currentUser.displayName);
    await setDoc(userRef, categories, { merge: true });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        signup,
        resetPassword,
        changeEmail,
        changePassword,
        like,
        dislike,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
