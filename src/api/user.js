import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu as menu } from "../fakeData/fakeMenu";

const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

const createUser = async (userId) => {
  const docRef = doc(db, "users", userId); //chemin
  const newUserCreated = {
    username: userId,
    menu: menu.LARGE, //des données
  };
  await setDoc(docRef, newUserCreated);

  return newUserCreated;
};

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    return await createUser(userId);
  }
  return existingUser;
};
