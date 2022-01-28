import { db } from "../firebase/firebaseConfing"


//carga las notas 
export const loadNotes = async (uid)=>{
    //le decimos que espere a la respuessta de la base de datos
   const noteSnap = await db.collection(`${uid}/journal/notes`).get();
    //notas lo igualamos a 0
   const notes = [];

    noteSnap.forEach(snapHijo =>{   //hacemos un recorrido en la respueta de noteSnap
        notes.push({                // hacemos el push a notes
            id: snapHijo.id,        //del id
            ...snapHijo.data()      // y de la data
        })
    })

   
   return notes;
}


