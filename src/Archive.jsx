import React,{useEffect, useState} from 'react'
import NoteList from './Notes/NoteList'
import { nanoid } from 'nanoid'
import Search from './Notes/Search';

export default function Archive(props) {

    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text:"first",
            date: "12.2.212"
        }
    ]);

    const [searchText, setSearchText] = useState('');
    useEffect(() => {

        
    })

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
            <Search handleSearchNote={ setSearchText }/>
            <NoteList notes={notes.filter((note) => note.date.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
            
        </div>
    )
}
