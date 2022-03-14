import React, { createContext, useEffect, useState } from "react";
import {
  getDocs,
  addDoc,
  db,
  toursRef,
  walksRef,
  deleteDoc,
  doc,
  storage,
} from "./components/firebase/config";
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [toursData, setToursData] = useState([]);
  const [walksData, setWalksData] = useState([]);
  // getting tours
  useEffect(() => {
    getDocs(toursRef)
      .then((snapshot) => {
        let toursData = [];
        snapshot.docs.forEach((doc) => {
          toursData.push({ ...doc.data(), id: doc.id });
        });
        setToursData(toursData);
        console.log(toursData);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getDocs(walksRef)
      .then((snapshot) => {
        let walksData = []; 
        snapshot.docs.forEach((doc) => {
          walksData.push({ ...doc.data(), id: doc.id });
        });
        setWalksData(walksData);
        console.log(walksData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Context.Provider value={{ toursData, walksData }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
