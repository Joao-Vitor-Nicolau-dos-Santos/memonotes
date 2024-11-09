// import { createContext,useEffect,useState } from "react";
// import {Notes as data} from '../Data/Notes';

// export const BlocContext = createContext();

// function BlocContextProvider(props){
//         const[notes, setNotes] = useState([]);
//         const[keyId, setKeyId] = useState(4);
    
//         function CreateNote(note){
//                 setNotes([
//                         ...notes,
//                         {
//                                 id: keyId,
//                                 title: note.title,
//                                 description: note.description,
//                             }
//                         ])
//     };

//     useEffect(() =>{
//         setNotes(data)
//     },[]);

//     function DeleteNote(noteId){
//         setNotes(notes.filter((note)=>note.id !== noteId));
//     }

//     return(
//             <BlocContext.Provider
//             value={{
//                 keyId,
//                 setKeyId,
//                 notes,
//                 DeleteNote,
//                 CreateNote,
//             }}
//         >
//             {props.children}
//         </BlocContext.Provider>  
//     );
// };

// export default BlocContextProvider; 


// BD
import { createContext, useEffect, useState } from "react";

// Criação do contexto
export const BlocContext = createContext();

function BlocContextProvider(props) {
    const [notes, setNotes] = useState([]);
    const [keyId, setKeyId] = useState(4); // Definido para controle local

    // Função para criar uma nova nota
    async function CreateNote(note) {
        console.log(note)
        const response = await fetch("http://localhost:5000/api/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                titulo: note.title,
                conteudo: note.description,
            }),
        });

        if (response.ok) {
            const newNote = await response.json();
            setNotes((prevNotes) => [...prevNotes, newNote]);
        } else {
            console.error("Erro ao criar a nota");
        }

        console.log(note);
    }

    // Função para deletar uma nota
    async function DeleteNote(noteId) {
        const response = await fetch(`http://localhost:5000/api/notes/${noteId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            setNotes(notes.filter((note) => note.id !== noteId));
        } else {
            console.error("Erro ao deletar a nota");
        }
    }

    // UseEffect para carregar as notas ao iniciar
    // useEffect(() => {
    //     async function fetchNotes() {
    //         const response = await fetch("http://localhost:5000/api/notes");
    //         if (response.ok) {
    //             const data = await response.json();
    //             setNotes(data);
    //         } else {
    //             console.error("Erro ao carregar as notas");
    //         }
    //     }

    //     fetchNotes();
    // }, []);

    return (
        <BlocContext.Provider
            value={{
                keyId,
                setKeyId,
                notes,
                DeleteNote,
                CreateNote,
            }}
        >
            {props.children}
        </BlocContext.Provider>
    );
}

export default BlocContextProvider;
