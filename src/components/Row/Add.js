import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setSessionItem, getSessionItem, removeSessionItem, setItem, getItem } from '../../services/storage';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './style.css';

function Add() {
    const [title, setTitle] = useState(getSessionItem('title', ""));
    const [content, setContent] = useState(getSessionItem('content', ""));

    const history = useHistory();

    function onTitleChange(event) {
        setTitle(event.target.value);
        setSessionItem('title', event.target.value);
    }
    function onContentChange(event) {
        setSessionItem('content', event.target.value);
        setContent(event.target.value);
    }
    function onSubmit() {
        //get the data from local storage
        let storedData = getItem('rowdata', []);
        //Make a new array, add new note and filter note if both fields are empty.
        let new_array = [...storedData, [title, content]].filter(sd => sd[0] && sd[1]);
        //store the new modified array in localstorage.
        setItem('rowdata', new_array);

        removeSessionItem('title');
        removeSessionItem('content');

        history.push('/');
    }

    return (
        <div className="add-container">
            <h1>Add a new Note</h1>
            <input autoFocus onChange={onTitleChange} placeholder="Title" value={title} />
            <br />
            <textarea onInput={onContentChange} placeholder="Content" value={content} />
            <br />
            <AwesomeButton className="awsbtn" onPress={onSubmit}>Add Note</AwesomeButton>
        </div>
    )
}
export default Add;