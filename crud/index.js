const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAN09Clb3tpYdAY_u1FYOGtHX8B6Dlsvq0",
    authDomain: "first-database-access.firebaseapp.com",
    projectId: "first-database-access",
    storageBucket: "first-database-access.appspot.com",
    messagingSenderId: "487412008681",
    appId: "1:487412008681:web:daa9b88b9011f1ce691278",
    measurementId: "G-EBXLPCQ6Z2"
  };

initializeApp(firebaseConfig);

const db = getFirestore();

async function salvar(nomeTabela, id, dado){
    if(id){
        const referenceEnity = await db.collection(nomeTabela).doc(id).set(dado);
        const savedData = {
            ...dado,
            id:id
        }
        return savedData;
    }else{
       const referenceEnity= await db.collection(nomeTabela).add(dado);
       const savedData = {
        ...dado,
        id:referenceEnity.id
       }
       return savedData;
    }
    
}

modules.export={
    save
}

