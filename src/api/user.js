import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu as menu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    //  true or false
    const data = docSnapshot.data();
    return data; // return data user
  }
};

export const createUser = (userId) => {
  const docRef = doc(db, "users", userId); //chemin
  const data = {
    username: userId,
    menu: menu.LARGE, //des données
  };
  setDoc(docRef, data);
};
