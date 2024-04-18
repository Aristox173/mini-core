import { db, collection, getDocs } from "./firebase/firebase.js";

async function getUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "Usuario"));

    const users = [];

    querySnapshot.forEach((doc) => {
      const user = {
        id: doc.id,
        ...doc.data(),
      };
      users.push(user);
    });

    return users;
  } catch (error) {
    console.log("Error getting users: ", error);
    throw error;
  }
}

async function getSells() {
  try {
    const querySnapshot = await getDocs(collection(db, "Venta"));

    const ventas = [];

    querySnapshot.forEach((doc) => {
      const venta = {
        id: doc.id,
        ...doc.data(),
      };
      ventas.push(venta);
    });

    return ventas;
  } catch (error) {
    console.log("Error getting ventas: ", error);
    throw error;
  }
}

export { getUsers, getSells };
