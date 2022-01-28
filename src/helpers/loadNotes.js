import { db } from "../firebase/firebaseConfing"

export const loadNotes = async (uid)=>{
   const noteSnap = await db.collection(`${uid}/journal/notes`).get();
    
   const notes = [];

    noteSnap.forEach(snapHijo =>{
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

   
   return notes;
}


