import React,{useEffect, useState} from 'react'
import NoteList from './Notes/NoteList'
import { nanoid } from 'nanoid'
import Search from './Notes/Search';

export default function Archive(props) {
// 
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text:"TEST",
            date: "14.01.2022"
        }
    ]);

    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
        
    }, [notes])




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
            <Search handleSearchNote={setSearchText} />
            <NoteList searchText={ searchText} notes={notes.filter((note) => note.date.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
            
        </div>
    )
}
