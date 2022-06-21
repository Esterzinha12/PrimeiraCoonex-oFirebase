const { initializeApp } = require('firebase/app');
const { getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    were,
    getDocs,
    getDoc,
    deleteDoc } = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyAN09Clb3tpYdAY_u1FYOGtHX8B6Dlsvq0",
    authDomain: "first-database-access.firebaseapp.com",
    projectId: "first-database-access",
    storageBucket: "first-database-access.appspot.com",
    messagingSenderId: "487412008681",
    appId: "1:487412008681:web:daa9b88b9011f1ce691278",
    measurementId: "G-EBXLPCQ6Z2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function salvar(nomeTabela, id, dado) {
    if (id) {
        const referenceEnity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEnity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEnity.id
        }
        return savedData;
    }

}

async function get(nomeTabela) {

    const tableRef = collection(db, nomeTabela);

    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = []
    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);

    });
    return lista;
}

async function getById(nomeTabela, id){
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return new Error ("Not found!");
    }

}

async function deletar(nomeTabela, id){
    const dado= await deleteDoc(doc{db, nomeTabela, id})
    return{
        messege:`${id} deleted`
    }
}


module.exports = {
    salvar,
    get
}

