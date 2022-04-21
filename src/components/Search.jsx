import React, { useState } from 'react';
import "./Search.css"
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({ hideButtons = false }) => {
    const [{},dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const search = (e) => {
        e.preventDefault()

        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })

        navigate("/search")
    }


    // function search(event){
    //     event.preventDefault()
    //     console.log(input)
    // }
    return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input defaultValue={input} onChange={event => setInput(event.target.value)} className="input" />
                <MicIcon className='micIcon' />
            </div>
            {
                !hideButtons ?
                    <div className="search__buttons">
                        <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                    :
                    <div className="search__buttons">
                        <Button className='search__buttonsHidden' type="submit" onClick={search} variant="outlined">
                            Google Search
                        </Button>
                        <Button className='search__buttonsHidden' variant="outlined">
                            I'm Feeling Lucky
                        </Button>
                    </div>
            }

        </form>
    );
}

export default Search;
