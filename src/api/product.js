import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu as menu } from "../fakeData/fakeMenu";

export const syncMenus = (userId, menuUpdated) => {
  const docRef = doc(db, "users", userId);
  const data = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(docRef, data);
};

export const getUserProducts = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu;
  }
  return menu.LARGE;
};
