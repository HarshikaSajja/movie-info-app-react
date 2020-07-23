import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchMovie } from '../actions/search'
import { enableLoader } from '../actions/loader'

const SearchForm:React.FC = (): JSX.Element => {
    const [movieName, setMovieName] = useState<string>('')
    const [invalid, setFieldInvalid] = useState<string>('')
    const dispatch = useDispatch();

    const onChangeHandler = e => {
        setMovieName(e.target.value)
        setFieldInvalid('')
    }

    const isFieldValid = () => {
        return movieName === '' ? false : true
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(isFieldValid()){
            dispatch(searchMovie(movieName))
            dispatch(enableLoader(true))
        }else {
            setFieldInvalid('is-invalid')
        }
    }

    return (
        <section className="container w-75 search">
            <h2 className="fa fa-search">&nbsp;&nbsp;Search for a movie, Tv Series.</h2>
            <form className="search-form">
                <input className={`form-control form-control-lg search-field ${invalid}`} type="text" name="movieName" onChange={onChangeHandler}></input>
                {invalid === 'is-invalid' ? <p className="text-danger" style={{marginTop:'-20px'}}>Field cannot be empty</p> : null}
                <button className={`btn btn-dark btn-lg search-btn`} onClick={onSubmitHandler}>SEARCH</button>
            </form>
        </section>
    )
}

export default SearchForm;