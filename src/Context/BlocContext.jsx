import { createContext,useEffect,useState } from "react";
import {Notes as data} from '../Data/Notes';

export const BlocContext = createContext();

function BlocContextProvider(props){
        const[notes, setNotes] = useState([]);
        const[keyId, setKeyId] = useState(4);
    
        function CreateNote(note){
                setNotes([
                        ...notes,
                        {
                                id: keyId,
                                title: note.title,
                                description: note.description,
                            }
                        ])
    };

    useEffect(() =>{
        setNotes(data)
    },[]);

    function DeleteNote(noteId){
        setNotes(notes.filter((note)=>note.id !== noteId));
    }

    return(
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
};

export default BlocContextProvider; 

//db

// import { createContext, useEffect, useState } from "react";
// import axios from 'axios'; // Adicione o axios para requisições HTTP

// export const BlocContext = createContext();

// function BlocContextProvider(props) {
//     const [notes, setNotes] = useState([]);
//     const [keyId, setKeyId] = useState(4); // Você pode remover isso, pois o ID será gerado pelo banco
    
//     useEffect(() => {
//         fetchNotes(); // Chame a função para buscar notas do banco de dados
//     }, []);

//     const fetchNotes = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/notas'); // URL do seu servidor
//             setNotes(response.data);
//         } catch (error) {
//             console.error('Erro ao buscar notas:', error);
//         }
//     };

//     const CreateNote = async (note) => {
//         try {
//             const response = await axios.post('http://localhost:5000/notas', note);
//             setNotes([...notes, response.data]);
//         } catch (error) {
//             console.error('Erro ao criar nota:', error);
//         }
//     };

//     const DeleteNote = async (noteId) => {
//         try {
//             await axios.delete(`http://localhost:5000/notas/${noteId}`);
//             setNotes(notes.filter((note) => note.id !== noteId));
//         } catch (error) {
//             console.error('Erro ao deletar nota:', error);
//         }
//     };

//     return (
//         <BlocContext.Provider
//             value={{
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
