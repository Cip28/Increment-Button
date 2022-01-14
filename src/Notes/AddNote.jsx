import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {

    
    const [noteText,setNoteText]=useState('')
    const characterLimit = 200;


    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
             
        }
    }

    const handleClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
        
    }
    return (
        <div className='note new'>
            <textarea
                placeholder='Enter the date and nr of actions...'
                cols="20"
                rows="8"
                value={noteText}
                onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{ characterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
