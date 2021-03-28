import React, { useState } from 'react';
import './style.css';
import { useHistory, useParams } from 'react-router-dom';
import { setItem, getItem } from '../../services/storage';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Edit() {
    const params = useParams();

    const [title, setTitle] = useState(getItem('rowdata', [])[params.index][0]);
    const [content, setContent] = useState(getItem('rowdata', [])[params.index][1]);

    const history = useHistory();

    function onTitleChange(event) {
        setTitle(event.target.value);
    }
    function onContentChange(event) {
        setContent(event.target.value);
    }
    function onSubmit() {
        changeRow();
        history.push('/note-app/');
    }

    function changeRow() {
        let storedData = getItem('rowdata', []);
        storedData[params.index] = [title, content];
        setItem('rowdata', storedData);
    }

    return (
        <div className="edit-container">
            <h1>Edit Note</h1>
            <input autoFocus onChange={onTitleChange} value={title} />
            <br />
            <textarea onChange={onContentChange} value={content} />
            <br />
            <AwesomeButton className="awsbtn" onPress={onSubmit}>Save Note</AwesomeButton>
        </div>
    )
}
export default Edit;