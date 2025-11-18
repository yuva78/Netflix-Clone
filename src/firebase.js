
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWwhsZ4-3h0ivtzRnFmWzmBPhCmGCdEoU",
  authDomain: "netflix-clone-7709d.firebaseapp.com",
  projectId: "netflix-clone-7709d",
  storageBucket: "netflix-clone-7709d.firebasestorage.app",
  messagingSenderId: "881638058624",
  appId: "1:881638058624:web:ac56997be717b56e645465"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: " local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }

}