import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

function Row(props) {
    const history = useHistory();

    function onNoteClick() {
        history.push('/edit/' + props.index);
    }

    return (
        <div key={"name" + props.index} className="row-container">
            <p className="row-title">
                {props.value[0]}
                <button title="Delete Note" className="row-delete" onClick={props.onRowDelete}>X</button>
            </p>
            <button title="Edit Note" className="row-note" onClick={onNoteClick}>
                <p>{props.value[1]}</p>
            </button>
        </div>
    )
}
export default Row;