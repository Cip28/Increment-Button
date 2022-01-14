import React,{useState} from 'react'
import NoteList from './Notes/NoteList'
import { nanoid } from 'nanoid'

export default function Archive(props) {

    const [notes, setNotes] = useState([
        // {
        //     id:nanoid(),
        //     text:"firsdt note",
        //     date:"15.212.321"
        // },
        // {
        //     id: nanoid(),
        //     text:"second note",
        //     date:"15.212.321"
        // },
        // {
        //     id: nanoid(),
        //     text:"third note",
        //     date:"15.212.321"
        // },

    ]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString('en-GB')
        };
        const newNotes = [ ...notes, newNote ];
        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <div className='archive'>
            <NoteList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
            
        </div>
    )
}
