import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncMenus = (userId, menuUpdated) => {
  const docRef = doc(db, "users", userId);
  const data = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(docRef, data);
};
