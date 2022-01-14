import React from 'react'

const Search = ({handleSearchNote}) => {
    return (
        <div className='search'>
            <i class="fas fa-search"></i>
            <input type="text" placeholder="type to search..." onChange={(event) => handleSearchNote(event.target.value)} />
        </div>
    )
}

export default Search
